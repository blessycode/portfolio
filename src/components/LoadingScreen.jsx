import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("")
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0) // 0: typing, 1: loading, 2: complete
  const [glitchActive, setGlitchActive] = useState(false)

  const fullText = "<BlessedZhou/>"
  const loadingSteps = [
    "Initializing AI systems...",
    "Loading neural networks...",
    "Connecting to data sources...",
    "Optimizing algorithms...",
    "Finalizing setup...",
  ]
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    // Phase 1: Typing animation
    let index = 0
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++

      if (index > fullText.length) {
        clearInterval(typingInterval)
        setPhase(1)

        // Trigger glitch effect
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 500)
      }
    }, 120)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    if (phase === 1) {
      // Phase 2: Loading progress
      let progressValue = 0
      let stepIndex = 0

      const progressInterval = setInterval(() => {
        progressValue += Math.random() * 3 + 1
        setProgress(Math.min(progressValue, 100))

        // Update loading step
        const newStepIndex = Math.floor((progressValue / 100) * loadingSteps.length)
        if (newStepIndex !== stepIndex && newStepIndex < loadingSteps.length) {
          setCurrentStep(newStepIndex)
          stepIndex = newStepIndex
        }

        if (progressValue >= 100) {
          clearInterval(progressInterval)
          setPhase(2)

          // Complete loading after animation
          setTimeout(() => {
            onComplete()
          }, 1500)
        }
      }, 100)

      return () => clearInterval(progressInterval)
    }
  }, [phase, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-black to-slate-800 text-gray-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        <div className="absolute inset-0">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-scan" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-green-400/20 blur-xl rounded-full animate-pulse" />
            <div className="relative w-20 h-20 mx-auto mb-4 border-2 border-green-400/30 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                BZ
              </span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className={`text-5xl md:text-6xl font-mono font-bold mb-4 ${glitchActive ? "animate-glitch" : ""}`}>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-blink ml-2 text-green-400 text-4xl">|</span>
          </div>

          {phase >= 1 && (
            <div className="text-lg text-gray-400 animate-fade-in">
              <span className="inline-block animate-pulse">●</span>
              <span className="ml-2">{loadingSteps[currentStep]}</span>
            </div>
          )}
        </div>

        {phase >= 1 && (
          <div className="w-full max-w-md mx-auto animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-400">Loading Progress</span>
              <span className="text-sm font-mono text-green-400">{Math.round(progress)}%</span>
            </div>

            <div className="relative w-full h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full" />

              <div
                className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full relative transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-sm opacity-50" />
              </div>

              <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-loading-dots"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      left: `${progress * 0.8 + i * 5}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 text-xs text-gray-500">
              <div className="text-center">
                <div className="text-green-400 font-mono">{Math.round(progress * 1.2)}MB</div>
                <div>Data Loaded</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-mono">{Math.round(progress * 0.8)}ms</div>
                <div>Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-mono">{Math.round(progress * 0.15)}s</div>
                <div>Processing</div>
              </div>
            </div>
          </div>
        )}

        {phase === 2 && (
          <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-green-400 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-xl text-green-400 font-semibold">Ready to Launch!</div>
            </div>
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400/30" />
    </div>
  )
}
