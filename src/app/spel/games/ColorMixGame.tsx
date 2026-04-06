'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

interface ColorMixGameProps {
  onComplete: (result: { success: boolean; coins: number; stars: number }) => void;
  onExit: () => void;
}

type ColorCategory = 'warm' | 'koel' | 'neutraal';

interface ColorBottle {
  id: number;
  condition: ColorCategory;
}

const CONDITION_CONFIG: Record<
  ColorCategory,
  { emoji: string; bottleEmoji: string; label: string; binEmoji: string }
> = {
  warm: { emoji: '🔥', bottleEmoji: '🧴', label: 'Warm', binEmoji: '🔥' },
  koel: { emoji: '❄️', bottleEmoji: '🧴', label: 'Koel', binEmoji: '❄️' },
  neutraal: { emoji: '⚖️', bottleEmoji: '🧴', label: 'Neutraal', binEmoji: '⚖️' },
};

const TOTAL_SEEDLINGS = 20;
const REQUIRED_CORRECT = 15;
const MAX_LIVES = 3;
const INITIAL_FALL_DURATION = 4000;
const MIN_FALL_DURATION = 1500;

type GameState = 'menu' | 'playing' | 'results';

function generateBottles(): ColorBottle[] {
  const conditions: ColorCategory[] = ['warm', 'koel', 'neutraal'];
  return Array.from({ length: TOTAL_SEEDLINGS }, (_, i) => ({
    id: i,
    condition: conditions[Math.floor(Math.random() * 3)],
  }));
}

export default function ColorMixGame({ onComplete, onExit }: ColorMixGameProps) {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [bottles, setBottles] = useState<ColorBottle[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  // Animation / visual feedback state
  const [fallProgress, setFallProgress] = useState(0);
  const [feedbackBed, setFeedbackBed] = useState<ColorCategory | null>(null);
  const [feedbackType, setFeedbackType] = useState<'correct' | 'wrong' | null>(null);
  const [seedlingVisible, setSeedlingVisible] = useState(true);
  const [showGrow, setShowGrow] = useState<ColorCategory | null>(null);
  const [showWilt, setShowWilt] = useState<ColorCategory | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [missFlash, setMissFlash] = useState(false);

  const fallTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fallStartRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);

  const currentBottle = bottles[currentIndex] ?? null;

  const getFallDuration = useCallback(
    (index: number) => {
      const progress = index / TOTAL_SEEDLINGS;
      return INITIAL_FALL_DURATION - progress * (INITIAL_FALL_DURATION - MIN_FALL_DURATION);
    },
    []
  );

  // Start game
  const startGame = useCallback(() => {
    const newBottles = generateBottles();
    setBottles(newBottles);
    setCurrentIndex(0);
    setLives(MAX_LIVES);
    setScore(0);
    setCoins(0);
    setCorrectCount(0);
    setFallProgress(0);
    setSeedlingVisible(true);
    setFeedbackBed(null);
    setFeedbackType(null);
    setShowGrow(null);
    setShowWilt(null);
    setIsProcessing(false);
    setMissFlash(false);
    setGameState('playing');
  }, []);

  // End the game
  const endGame = useCallback(
    (finalCorrect: number, finalCoins: number) => {
      const success = finalCorrect >= REQUIRED_CORRECT;
      const stars = finalCorrect >= 20 ? 3 : finalCorrect >= 17 ? 2 : finalCorrect >= REQUIRED_CORRECT ? 1 : 0;
      setGameState('results');
      // Small delay so player sees result screen before callback
      setTimeout(() => {
        onComplete({ success, coins: finalCoins, stars });
      }, 100);
    },
    [onComplete]
  );

  // Advance to next bottle or end game
  const advanceToNext = useCallback(
    (newLives: number, newCorrect: number, newCoins: number) => {
      const nextIndex = currentIndex + 1;

      if (newLives <= 0 || nextIndex >= TOTAL_SEEDLINGS) {
        endGame(newCorrect, newCoins);
        return;
      }

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setFallProgress(0);
        setSeedlingVisible(true);
        setFeedbackBed(null);
        setFeedbackType(null);
        setShowGrow(null);
        setShowWilt(null);
        setIsProcessing(false);
      }, 600);
    },
    [currentIndex, endGame]
  );

  // Handle bin tap
  const handleBinTap = useCallback(
    (bed: ColorCategory) => {
      if (isProcessing || !currentBottle || gameState !== 'playing') return;
      setIsProcessing(true);

      // Stop the fall animation
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

      const isCorrect = bed === currentBottle.condition;

      if (isCorrect) {
        const newCoins = coins + 10;
        const newCorrect = correctCount + 1;
        const newScore = score + 10;
        setCoins(newCoins);
        setCorrectCount(newCorrect);
        setScore(newScore);
        setFeedbackBed(bed);
        setFeedbackType('correct');
        setSeedlingVisible(false);
        setShowGrow(bed);
        advanceToNext(lives, newCorrect, newCoins);
      } else {
        const newLives = lives - 1;
        setLives(newLives);
        setFeedbackBed(bed);
        setFeedbackType('wrong');
        setSeedlingVisible(false);
        setShowWilt(bed);
        advanceToNext(newLives, correctCount, coins);
      }
    },
    [isProcessing, currentBottle, gameState, coins, correctCount, score, lives, advanceToNext]
  );

  // Handle miss (bottle reaches bottom)
  const handleMiss = useCallback(() => {
    if (isProcessing) return;
    setIsProcessing(true);

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const newLives = lives - 1;
    setLives(newLives);
    setSeedlingVisible(false);
    setMissFlash(true);
    setTimeout(() => setMissFlash(false), 400);
    advanceToNext(newLives, correctCount, coins);
  }, [isProcessing, lives, correctCount, coins, advanceToNext]);

  // Fall animation loop
  useEffect(() => {
    if (gameState !== 'playing' || isProcessing || !currentBottle) return;

    const duration = getFallDuration(currentIndex);
    fallStartRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - fallStartRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setFallProgress(progress);

      if (progress >= 1) {
        handleMiss();
        return;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gameState, currentIndex, isProcessing, currentBottle, getFallDuration, handleMiss]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (fallTimerRef.current) clearInterval(fallTimerRef.current);
    };
  }, []);

  // ---- RENDER ----

  if (gameState === 'menu') {
    return (
      <>
        <style>{gameStyles}</style>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 via-purple-900 to-pink-900 p-4">
          <div className="max-w-sm w-full bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-purple-600/30">
            <div className="text-7xl mb-4 animate-bounce-slow">🎨</div>
            <h1 className="text-3xl font-extrabold text-purple-100 mb-2">Mix de Kleur</h1>
            <p className="text-purple-200/80 text-sm mb-6 leading-relaxed">
              Er vallen verfflessen naar beneden! Elke fles heeft een categorie:
              <span className="block mt-2 font-semibold text-yellow-300">🔥 Warm &nbsp; ❄️ Koel &nbsp; ⚖️ Neutraal</span>
            </p>
            <p className="text-purple-200/70 text-xs mb-6 leading-relaxed">
              Tik op de juiste kleurcategorie om de verf te sorteren.
              Foute categorie = verf verspild! 3 verspilde flessen en het spel is voorbij.
              Sorteer minstens {REQUIRED_CORRECT} van de {TOTAL_SEEDLINGS} flessen goed om te winnen!
            </p>
            <button
              onClick={startGame}
              className="w-full py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 active:scale-95 text-white font-bold text-lg transition-all shadow-lg shadow-pink-900/50"
            >
              Start
            </button>
            <button
              onClick={onExit}
              className="mt-3 text-purple-300/60 hover:text-purple-200 text-sm underline transition-colors"
            >
              Terug
            </button>
          </div>
        </div>
      </>
    );
  }

  if (gameState === 'results') {
    const success = correctCount >= REQUIRED_CORRECT;
    const stars = correctCount >= 20 ? 3 : correctCount >= 17 ? 2 : correctCount >= REQUIRED_CORRECT ? 1 : 0;

    return (
      <>
        <style>{gameStyles}</style>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 via-purple-900 to-pink-900 p-4">
          <div className="max-w-sm w-full bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-purple-600/30">
            <div className="text-6xl mb-3">{success ? '🎨' : '💔'}</div>
            <h2 className="text-2xl font-extrabold text-purple-100 mb-2">
              {success ? 'Gewonnen!' : 'Game Over'}
            </h2>
            <p className="text-purple-200/80 text-sm mb-4">
              {success
                ? `Je hebt ${correctCount}/${TOTAL_SEEDLINGS} flessen goed gesorteerd!`
                : `Slechts ${correctCount}/${TOTAL_SEEDLINGS} goed. Je hebt ${REQUIRED_CORRECT} nodig om te winnen.`}
            </p>

            <div className="flex justify-center gap-1 text-3xl mb-3">
              {[1, 2, 3].map((s) => (
                <span key={s} className={s <= stars ? 'opacity-100' : 'opacity-30'}>
                  ⭐
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-2xl">🪙</span>
              <span className="text-xl font-bold text-yellow-300">{coins}</span>
            </div>

            <button
              onClick={startGame}
              className="w-full py-3 rounded-2xl bg-pink-500 hover:bg-pink-400 active:scale-95 text-white font-bold text-lg transition-all shadow-lg mb-3"
            >
              Opnieuw Spelen
            </button>
            <button
              onClick={onExit}
              className="text-purple-300/60 hover:text-purple-200 text-sm underline transition-colors"
            >
              Terug
            </button>
          </div>
        </div>
      </>
    );
  }

  // ---- PLAYING STATE ----
  const livesDisplay = Array.from({ length: MAX_LIVES }, (_, i) =>
    i < lives ? '🧴' : '💀'
  );

  const bottleConfig = currentBottle ? CONDITION_CONFIG[currentBottle.condition] : null;

  // Calculate the vertical position of the falling bottle (0% = top, 100% = near bins)
  const seedlingTopPercent = fallProgress * 100;

  return (
    <>
      <style>{gameStyles}</style>
      <div
        className={`min-h-screen flex flex-col bg-gradient-to-b from-purple-800 via-pink-900 to-pink-950 relative overflow-hidden select-none ${
          missFlash ? 'miss-flash' : ''
        }`}
      >
        {/* Top HUD */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2 z-20 relative">
          <div className="flex gap-1 text-xl">
            {livesDisplay.map((l, i) => (
              <span key={i} className={l === '💀' ? 'animate-wilt-inline' : ''}>
                {l}
              </span>
            ))}
          </div>
          <div className="text-purple-100 font-bold text-sm bg-black/20 px-3 py-1 rounded-full">
            Fles {Math.min(currentIndex + 1, TOTAL_SEEDLINGS)}/{TOTAL_SEEDLINGS}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg">🪙</span>
            <span className="text-yellow-300 font-bold text-sm">{coins}</span>
          </div>
        </div>

        {/* Speed indicator bar */}
        <div className="px-4 mb-1 z-20 relative">
          <div className="h-1 rounded-full bg-black/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all"
              style={{ width: `${((currentIndex / TOTAL_SEEDLINGS) * 100).toFixed(0)}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-purple-300/50 mt-0.5">
            <span>Langzaam</span>
            <span>Snel!</span>
          </div>
        </div>

        {/* Falling zone */}
        <div className="flex-1 relative z-10">
          {/* Depth lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-purple-300" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-300" />
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-purple-300" />
          </div>

          {/* Bottle card */}
          {seedlingVisible && bottleConfig && (
            <div
              className="absolute left-1/2 -translate-x-1/2 z-30 transition-none"
              style={{
                top: `${Math.min(seedlingTopPercent, 85)}%`,
              }}
            >
              <div className="seedling-card bg-white/95 rounded-2xl px-5 py-3 shadow-2xl shadow-black/30 flex flex-col items-center gap-1 border-2 border-purple-300/50 min-w-[120px]">
                <span className="text-4xl">{bottleConfig.bottleEmoji}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">{bottleConfig.emoji}</span>
                  <span className="text-sm font-bold text-gray-700">{bottleConfig.label}</span>
                </div>
              </div>
            </div>
          )}

          {/* Grow animation overlay */}
          {showGrow && (
            <div className="absolute inset-x-0 bottom-0 flex justify-center z-40 pointer-events-none">
              <div className="grow-burst text-5xl">🎨✨🧴</div>
            </div>
          )}
        </div>

        {/* Color Category Bins */}
        <div className="relative z-20 px-2 pb-6 pt-2">
          {/* Top border */}
          <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-pink-800/80 to-transparent rounded-t-3xl" />

          <div className="flex gap-2 justify-center">
            {(['warm', 'koel', 'neutraal'] as ColorCategory[]).map((bed) => {
              const config = CONDITION_CONFIG[bed];
              const isCorrectFeedback = feedbackBed === bed && feedbackType === 'correct';
              const isWrongFeedback = feedbackBed === bed && feedbackType === 'wrong';
              const isGrowing = showGrow === bed;
              const isWilting = showWilt === bed;

              let bedBg = '';
              if (bed === 'warm') bedBg = 'bg-gradient-to-b from-red-400 to-orange-500';
              if (bed === 'koel') bedBg = 'bg-gradient-to-b from-blue-400 to-indigo-600';
              if (bed === 'neutraal') bedBg = 'bg-gradient-to-b from-gray-300 to-gray-500';

              return (
                <button
                  key={bed}
                  onClick={() => handleBinTap(bed)}
                  disabled={isProcessing}
                  className={`
                    relative flex-1 max-w-[130px] rounded-2xl py-5 px-2 flex flex-col items-center gap-1
                    transition-all active:scale-90
                    ${bedBg}
                    ${seedlingVisible && !isProcessing ? 'bed-pulse' : ''}
                    ${isCorrectFeedback ? 'correct-flash' : ''}
                    ${isWrongFeedback ? 'wrong-shake' : ''}
                    border-2 border-white/20 shadow-lg shadow-black/30
                  `}
                >
                  <span className="text-3xl">{config.binEmoji}</span>
                  <span className="text-xs font-bold text-white/90 tracking-wide drop-shadow">
                    {config.label}
                  </span>

                  {/* Grow overlay */}
                  {isGrowing && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl overflow-hidden">
                      <div className="grow-plant text-4xl">🧴</div>
                    </div>
                  )}

                  {/* Wilt overlay */}
                  {isWilting && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl overflow-hidden bg-pink-900/50">
                      <div className="wilt-plant text-4xl">💀</div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Exit button */}
        <button
          onClick={onExit}
          className="absolute top-4 right-4 z-50 text-white/40 hover:text-white/80 text-xl transition-colors"
          aria-label="Sluiten"
        >
          ✕
        </button>
      </div>
    </>
  );
}

const gameStyles = `
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
  }

  @keyframes bed-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0); }
    50% { box-shadow: 0 0 20px 4px rgba(236, 72, 153, 0.4); }
  }
  .bed-pulse {
    animation: bed-pulse 1s ease-in-out infinite;
  }

  @keyframes correct-flash {
    0% { filter: brightness(1); }
    30% { filter: brightness(1.8); background-color: rgba(34,197,94,0.6); }
    100% { filter: brightness(1); }
  }
  .correct-flash {
    animation: correct-flash 0.5s ease-out;
  }

  @keyframes wrong-shake {
    0%, 100% { transform: translateX(0); }
    15% { transform: translateX(-8px); }
    30% { transform: translateX(8px); }
    45% { transform: translateX(-6px); }
    60% { transform: translateX(6px); }
    75% { transform: translateX(-3px); }
    90% { transform: translateX(3px); }
  }
  .wrong-shake {
    animation: wrong-shake 0.5s ease-out;
  }

  @keyframes grow-plant {
    0% { transform: scale(0.3); opacity: 1; }
    50% { transform: scale(1.5); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  .grow-plant {
    animation: grow-plant 0.6s ease-out forwards;
  }

  @keyframes wilt-plant {
    0% { transform: scale(1) rotate(0deg); opacity: 1; }
    50% { transform: scale(1.2) rotate(-15deg); opacity: 1; }
    100% { transform: scale(0.6) rotate(-45deg); opacity: 0; }
  }
  .wilt-plant {
    animation: wilt-plant 0.6s ease-out forwards;
  }

  @keyframes grow-burst {
    0% { transform: scale(0); opacity: 1; }
    50% { transform: scale(1.5); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }
  .grow-burst {
    animation: grow-burst 0.7s ease-out forwards;
  }

  @keyframes wilt-inline {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-30deg); }
  }
  .animate-wilt-inline {
    display: inline-block;
    animation: wilt-inline 0.3s ease-out forwards;
  }

  @keyframes miss-flash-anim {
    0% { background-color: transparent; }
    50% { background-color: rgba(239, 68, 68, 0.3); }
    100% { background-color: transparent; }
  }
  .miss-flash {
    animation: miss-flash-anim 0.4s ease-out;
  }

  .seedling-card {
    animation: seedling-wobble 0.6s ease-in-out infinite alternate;
  }

  @keyframes seedling-wobble {
    0% { transform: rotate(-2deg); }
    100% { transform: rotate(2deg); }
  }
`;
