document.addEventListener('DOMContentLoaded', () => {
    const greetingContainer = document.getElementById('greeting-container');
    const videoContainer = document.getElementById('video-container');
    const greeting = document.getElementById('greeting');
    const video = document.getElementById('christmas-video');

    // Enhanced typewriter effect
    const originalText = greeting.textContent;
    greeting.textContent = '';

    setTimeout(() => {
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < originalText.length) {
                greeting.textContent += originalText.charAt(i);
                // Add sound effect simulation
                if (Math.random() > 0.7) {
                    greeting.style.transform = `scale(${1 + Math.random() * 0.1})`;
                    setTimeout(() => {
                        greeting.style.transform = 'scale(1)';
                    }, 100);
                }
                i++;
            } else {
                clearInterval(typeWriter);
                // Add celebration effect when typing is done
                createCelebrationBurst();
            }
        }, 150);
    }, 2000);

    // Transition to video automatically and quickly
    setTimeout(() => {
        // Quick transition to video
        setTimeout(() => {
            greetingContainer.style.transition = 'all 1s ease-out';
            greetingContainer.style.transform = 'scale(0) rotate(360deg)';
            greetingContainer.style.opacity = '0';
            greetingContainer.style.filter = 'blur(10px)';

            setTimeout(() => {
                greetingContainer.style.display = 'none';
                videoContainer.style.display = 'block';

                // Start Christmas lights ONLY when video appears
                startChristmasLights();

                // Force video to play with sound from the start
                video.volume = 1.0; // Maximum volume
                video.muted = false; // Never muted

                // Force play with sound - no fallback to muted
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('🎵 Video playing with sound from start!');
                        video.muted = false; // Ensure never muted
                        video.volume = 1.0; // Keep maximum volume
                    }).catch(e => {
                        console.log('Forcing audio play despite browser restrictions:', e);
                        // Force unmuted even if browser complains
                        video.muted = false;
                        video.volume = 1.0;
                        // Try again after a short delay
                        setTimeout(() => {
                            video.play();
                            video.muted = false;
                        }, 100);
                    });
                }
            }, 1000);
        }, 500);
    }, 4000);

    // Simple click effect on greeting
    greeting.addEventListener('click', () => {
        createClickBurst();
        greeting.style.animation = 'none';
        setTimeout(() => {
            greeting.style.animation = 'simpleColorShift 3s ease infinite, simplePulse 2s ease-in-out infinite alternate';
        }, 100);
    });

    // Video event listeners
    video.addEventListener('play', () => {
        console.log('🎬 Video started! Time for troll messages!');
    });

    // Simplified video click - ensure volume stays high
    video.addEventListener('click', () => {
        video.muted = false;
        video.volume = 1.0;
        console.log('🔊 Audio reinforced on click!');
    });
});

function createCelebrationBurst() {
    // Performance optimization: disabled for better performance
    return;
}

function createHolographicParticle(centerX, centerY, layer) {
    // Performance optimization: disabled for better performance
    return;
}

function createScreenFlash() {
    // Performance optimization: disabled for better performance
    return;
}

function createExplosionEffect() {
    // Performance optimization: disabled
    return;
}

function createClickBurst() {
    // Simple lightweight click effect
    const greeting = document.getElementById('greeting');
    if (!greeting) return;
    
    // Just a simple scale animation
    greeting.style.transform = 'scale(1.1)';
    setTimeout(() => {
        greeting.style.transform = 'scale(1)';
    }, 200);
}

function startFloatingMessages() {
    // Performance optimization: disabled floating messages
    return;
}

"🔔 Tocou o sino… alguém bateu na panela pedindo açúcar. 🔔",
    "🎄 Árvore de Natal montada: 5 minutos. Desmontar: março. 🎄",
    "✨ Espírito natalino ativado: só até acabar a rabanada. ✨",
    "🎅 Noel riu 'Ho Ho Ho'. Eu ri de nervoso. 🎅",
    "🎁 Meu presente favorito? Ficar em paz e longe de confusão. 🎁",
    "🧦 Pendurei a meia… ganhei mais uma conta. Obrigado, Noel. 🧦",
    "❄️ Sonho de Natal branco… mas o que vem é chuva de boletos. ❄️",

    "💡 Pisca-pisca do vizinho piscando mais que minha paciência. 💡",
    "🧁 Ceia de Natal: comi pouco… só três pratos para testar. 🧁",

    "🎄 O Natal só começa quando alguém diz: ‘é pavê ou pacomê?’ 🎄",
    "🎅 Se o Noel entrar pela minha chaminé, vai ter que limpar depois. 🎅",
    "🎁 Lista de presentes atualizada: só quero dinheiro e paz. 🎁",

    "✨ Natal: aquela época linda em que o cartão de crédito chora. ✨",
    "🎉 O clima natalino chega… e meu descanso mental vai embora. 🎉"
];

// Container para mensagens flutuantes
let messagesContainer;

// Função para criar mensagens flutuantes (desabilitada para performance)
function createFloatingMessagesSystem() {
    // Criar container se não existir
    if (!messagesContainer) {
        messagesContainer = document.getElementById('floating-messages');
    }
    
    // Performance optimization: função desabilitada
    return;
}

// Enhanced message trail effect
function createMessageTrail(messageElement) {
    setInterval(() => {
        if (document.body.contains(messageElement)) {
            const trail = document.createElement('div');
            trail.textContent = ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)];
            trail.style.position = 'absolute';
            trail.style.fontSize = '20px';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '5';

            const rect = messageElement.getBoundingClientRect();
            trail.style.left = (rect.right - 30) + 'px';
            trail.style.top = (rect.top + Math.random() * rect.height) + 'px';
            trail.style.animation = 'trailFade 2s ease-out forwards';

            document.body.appendChild(trail);

            setTimeout(() => {
                if (document.body.contains(trail)) {
                    document.body.removeChild(trail);
                }
            }, 2000);
        }
    }, 300);
}

function startTrollEffects() {
    // Disabled for performance
    return;
}

function createDancerBurst(dancer) {
    // Performance optimization: disabled dancer burst effects
    return;
}

// Christmas Fireworks Effect
function startChristmasFireworks() {
    setInterval(() => {
        createFirework();
    }, 3000);
}

function createFirework() {
    const colors = ['#FFD700', '#FF69B4', '#00FF00', '#FF0000', '#00BFFF', '#FFFFFF'];
    const centerX = Math.random() * window.innerWidth;
    const centerY = Math.random() * window.innerHeight * 0.6;

    // Create explosion center
    const center = document.createElement('div');
    center.style.position = 'fixed';
    center.style.left = centerX + 'px';
    center.style.top = centerY + 'px';
    center.style.width = '10px';
    center.style.height = '10px';
    center.style.background = colors[Math.floor(Math.random() * colors.length)];
    center.style.borderRadius = '50%';
    center.style.zIndex = '25';
    document.body.appendChild(center);

    // Create firework particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = (i / 20) * 360;
        const distance = Math.random() * 150 + 50;

        particle.textContent = ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)];
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.fontSize = '20px';
        particle.style.color = color;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '25';
        particle.style.textShadow = `0 0 10px ${color}`;

        const duration = Math.random() * 1000 + 1500;
        particle.style.animation = `fireworkBurst ${duration}ms ease-out forwards`;
        particle.style.setProperty('--angle', angle + 'deg');
        particle.style.setProperty('--distance', distance + 'px');

        document.body.appendChild(particle);

        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, duration);
    }

    setTimeout(() => {
        if (document.body.contains(center)) {
            document.body.removeChild(center);
        }
    }, 100);
}

// Shooting Stars Effect
function startShootingStars() {
    setInterval(() => {
        createShootingStar();
    }, 4000);
}

function createShootingStar() {
    const star = document.createElement('div');
    star.textContent = '🌠';
    star.style.position = 'fixed';
    star.style.left = '-50px';
    star.style.top = Math.random() * window.innerHeight * 0.3 + 'px';
    star.style.fontSize = '30px';
    star.style.zIndex = '30';
    star.style.filter = 'drop-shadow(0 0 15px #FFFFFF)';
    star.style.animation = 'shootingStar 3s linear forwards';

    document.body.appendChild(star);

    setTimeout(() => {
        if (document.body.contains(star)) {
            document.body.removeChild(star);
        }
    }, 3000);
}

// Christmas Lights Effect (border lights)
function startChristmasLights() {
    // Add animated border directly to video
    const video = document.getElementById('christmas-video');
    if (video) {
        video.style.border = '8px solid #FF0000';
        video.style.borderRadius = '15px';
        video.style.animation = 'videoBorderBlink 1.2s infinite';
        video.style.boxShadow = '0 0 25px #FF0000, 0 0 50px #FF0000';
    }

    const lightContainer = document.createElement('div');
    lightContainer.id = 'christmas-lights';
    lightContainer.style.position = 'fixed';
    lightContainer.style.top = '0';
    lightContainer.style.left = '0';
    lightContainer.style.width = '100vw';
    lightContainer.style.height = '100vh';
    lightContainer.style.pointerEvents = 'none';
    lightContainer.style.zIndex = '35';

    // Create lights around screen border with proper color cycling
    const borderPositions = [
        // Top border
        ...Array.from({ length: 25 }, (_, i) => ({ x: (i * 4) + '%', y: '8px', type: 'top' })),
        // Bottom border  
        ...Array.from({ length: 25 }, (_, i) => ({ x: (i * 4) + '%', y: 'calc(100vh - 28px)', type: 'bottom' })),
        // Left border
        ...Array.from({ length: 20 }, (_, i) => ({ x: '8px', y: (i * 5) + '%', type: 'left' })),
        // Right border
        ...Array.from({ length: 20 }, (_, i) => ({ x: 'calc(100vw - 28px)', y: (i * 5) + '%', type: 'right' }))
    ];

    borderPositions.forEach((pos, index) => {
        const light = document.createElement('div');
        light.style.position = 'absolute';
        light.style.left = pos.x;
        light.style.top = pos.y;
        light.style.width = '16px';
        light.style.height = '16px';
        light.style.borderRadius = '50%';
        light.style.border = '2px solid rgba(255,255,255,0.6)';
        
        // Remove fixed color and let animation handle it
        light.style.backgroundColor = 'transparent';
        light.style.animation = `borderLightsCycle 1.5s infinite ${(index * 0.08)}s`;

        lightContainer.appendChild(light);
    });

    document.body.appendChild(lightContainer);
}

// Aurora Effect
function startAuroraEffect() {
    const aurora = document.createElement('div');
    aurora.style.position = 'fixed';
    aurora.style.top = '0';
    aurora.style.left = '0';
    aurora.style.width = '100vw';
    aurora.style.height = '30vh';
    aurora.style.background = 'linear-gradient(180deg, rgba(0,255,150,0.3) 0%, rgba(0,150,255,0.2) 50%, transparent 100%)';
    aurora.style.opacity = '0';
    aurora.style.animation = 'auroraWave 8s ease-in-out infinite';
    aurora.style.pointerEvents = 'none';
    aurora.style.zIndex = '10';

    document.body.appendChild(aurora);
}

// Intense Snow Effect
function startIntenseSnow() {
    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            createEnhancedSnowflake();
        }
    }, 200);
}

function createEnhancedSnowflake() {
    const snowflake = document.createElement('div');
    const snowTypes = ['❄️', '⛄', '🌨️', '❅', '💎'];
    snowflake.textContent = snowTypes[Math.floor(Math.random() * snowTypes.length)];
    snowflake.style.position = 'fixed';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.top = '-50px';
    snowflake.style.fontSize = Math.random() * 25 + 15 + 'px';
    snowflake.style.opacity = Math.random() * 0.8 + 0.3;
    snowflake.style.zIndex = '20';
    snowflake.style.filter = 'drop-shadow(0 0 8px #FFFFFF)';
    snowflake.style.animation = `enhancedSnowFall ${Math.random() * 4 + 4}s linear forwards`;
    snowflake.style.pointerEvents = 'none';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        if (document.body.contains(snowflake)) {
            document.body.removeChild(snowflake);
        }
    }, 8000);
}

function createEnhancedParticles() {
    // Define particles locally to avoid reference errors
    const particles = ['✨', '⭐', '🌟', '💫', '🔆', '✦', '✧', '★', '❄️', '⛄', '🌨️', '❅', '💎'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '-50px';
        particle.style.fontSize = (Math.random() * 25 + 15) + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.animation = `enhancedFloatUp ${Math.random() * 4 + 5}s linear forwards`;

        document.body.appendChild(particle);

        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 9000);
    }, 600);
}

function createSnowEffect() {
    const snowContainer = document.getElementById('snow-container');

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄️';
        snowflake.style.position = 'absolute';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.top = '-10px';
        snowflake.style.fontSize = Math.random() * 15 + 10 + 'px';
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        snowflake.style.animation = `snowFall ${Math.random() * 3 + 3}s linear forwards`;

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            if (snowContainer.contains(snowflake)) {
                snowContainer.removeChild(snowflake);
            }
        }, 6000);
    }, 200);
}

// Enhanced animation CSS with spectacular effects
const style = document.createElement('style');
style.textContent = `
    @keyframes enhancedFloatUp {
        from {
            translateY(0) rotate(0deg) scale(1);
            1;
        }
        to {
            translateY(-120vh) rotate(720deg) scale(0.5);
            0;
        }
    }
    
    @keyframes burstOut {
        from {
            translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(1);
            1;
        }
        to {
            translate(-50%, -50%) rotate(var(--angle)) translateY(var(--distance)) scale(0);
            0;
        }
    }
    
    @keyframes explode {
        from {
            translate(-50%, -50%) scale(0);
            1;
        }
        to {
            translate(-50%, -50%) translateX(\${Math.random() * 400 - 200}px) translateY(\${Math.random() * 400 - 200}px) scale(1);
            0;
        }
    }
    
    @keyframes clickBurst {
        from {
            translate(-50%, -50%) scale(0.5);
            1;
        }
        to {
            translate(-50%, -50%) translateX(\${Math.random() * 200 - 100}px) translateY(\${Math.random() * 200 - 100}px) scale(2);
            0;
        }
    }
    
    @keyframes snowFall {
        from {
            translateY(0) translateX(0) rotate(0deg);
            1;
        }
        to {
            translateY(100vh) translateX(\${Math.random() * 100 - 50}px) rotate(360deg);
            0;
        }
    }
    
    /* New spectacular animations */
    @keyframes megaGlow {
        from {
            box-shadow: 
                0 15px 50px rgba(0,0,0,0.4),
                inset 0 2px 10px rgba(255,255,255,0.3),
                0 0 30px rgba(255,215,0,0.6);
            brightness(1);
        }
        to {
            box-shadow: 
                0 25px 80px rgba(0,0,0,0.6),
                inset 0 4px 20px rgba(255,255,255,0.6),
                0 0 60px rgba(255,105,180,1),
                0 0 90px rgba(147,112,219,0.8);
            brightness(1.3);
        }
    }
    
    /* New center-focused floating animations */
    @keyframes floatFromLeftCenter {
        0% {
            transform: translateX(0) translateY(0) rotateY(-45deg) scale(0.8);
            0;
            blur(5px);
        }
        25% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(40vw) translateY(-10vh) rotateY(-15deg) scale(1.1);
        }
        50% {
            transform: translateX(50vw) translateY(0) rotateY(0deg) scale(1);
        }
        75% {
            transform: translateX(60vw) translateY(10vh) rotateY(15deg) scale(1);
        }
        100% {
            transform: translateX(calc(100vw + 200px)) translateY(0) rotateY(45deg) scale(0.8);
            opacity: 0;
            filter: blur(5px);
        }
    }
    
    @keyframes floatFromRightCenter {
        0% {
            transform: translateX(0) translateY(0) rotateY(45deg) scale(0.8);
            opacity: 0;
            filter: blur(5px);
        }
        25% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(-40vw) translateY(-10vh) rotateY(15deg) scale(1.1);
        }
        50% {
            transform: translateX(-50vw) translateY(0) rotateY(0deg) scale(1);
        }
        75% {
            transform: translateX(-60vw) translateY(10vh) rotateY(-15deg) scale(1);
        }
        100% {
            transform: translateX(calc(-100vw - 200px)) translateY(0) rotateY(-45deg) scale(0.8);
            0;
            blur(5px);
        }
    }
    
    @keyframes floatFromTopCenter {
        0% {
            transform: translateY(0) translateX(0) rotateX(-45deg) scale(0.8);
            0;
            blur(5px);
        }
        25% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(30vh) translateX(-10vw) rotateX(-15deg) scale(1.1);
        }
        50% {
            transform: translateY(50vh) translateX(0) rotateX(0deg) scale(1);
        }
        75% {
            transform: translateY(60vh) translateX(10vw) rotateX(15deg) scale(1);
        }
        100% {
            transform: translateY(calc(100vh + 200px)) translateX(0) rotateX(45deg) scale(0.8);
            opacity: 0;
            filter: blur(5px);
        }
    }
    
    @keyframes floatFromBottomCenter {
        0% {
            transform: translateY(0) translateX(0) rotateX(45deg) scale(0.8);
            opacity: 0;
            filter: blur(5px);
        }
        25% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(-30vh) translateX(10vw) rotateX(15deg) scale(1.1);
        }
        50% {
            transform: translateY(-50vh) translateX(0) rotateX(0deg) scale(1);
        }
        75% {
            transform: translateY(-60vh) translateX(-10vw) rotateX(-15deg) scale(1);
        }
        100% {
            transform: translateY(calc(-100vh - 200px)) translateX(0) rotateX(-45deg) scale(0.8);
            0;
            blur(5px);
        }
    }
    
    /* Legacy animations for fallback */
    @keyframes floatFromLeft {
        0% {
            transform: translateX(0) translateY(0) rotateY(-45deg) scale(0.8);
            0;
            blur(5px);
        }
        15% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(200px) translateY(-20px) rotateY(0deg) scale(1.1);
        }
        85% {
            opacity: 1;
            transform: translateX(calc(100vw - 200px)) translateY(20px) rotateY(15deg) scale(1);
        }
        100% {
            transform: translateX(calc(100vw + 200px)) translateY(0) rotateY(45deg) scale(0.8);
            opacity: 0;
            filter: blur(5px);
        }
    }
    
    @keyframes floatFromRight {
        0% {
            transform: translateX(0) translateY(0) rotateY(45deg) scale(0.8);
            opacity: 0;
            filter: blur(5px);
        }
        15% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(-200px) translateY(-20px) rotateY(0deg) scale(1.1);
        }
        85% {
            opacity: 1;
            transform: translateX(calc(-100vw + 200px)) translateY(20px) rotateY(-15deg) scale(1);
        }
        100% {
            transform: translateX(calc(-100vw - 200px)) translateY(0) rotateY(-45deg) scale(0.8);
            0;
            blur(5px);
        }
    }
    
    @keyframes floatFromTop {
        0% {
            transform: translateY(0) translateX(0) rotateX(-45deg) scale(0.8);
            0;
            blur(5px);
        }
        15% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(200px) translateX(-30px) rotateX(0deg) scale(1.1);
        }
        85% {
            opacity: 1;
            transform: translateY(calc(100vh - 150px)) translateX(30px) rotateX(15deg) scale(1);
        }
        100% {
            transform: translateY(calc(100vh + 200px)) translateX(0) rotateX(45deg) scale(0.8);
            opacity: 0;
            filter: blur(5px);
        }
    }
    
    @keyframes floatFromBottom {
        0% {
            transform: translateY(0) translateX(0) rotateX(45deg) scale(0.8);
            opacity: 0;
            filter: blur(5px);
        }
        15% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(-200px) translateX(30px) rotateX(0deg) scale(1.1);
        }
        85% {
            opacity: 1;
            transform: translateY(calc(-100vh + 150px)) translateX(-30px) rotateX(-15deg) scale(1);
        }
        100% {
            transform: translateY(calc(-100vh - 200px)) translateX(0) rotateX(-45deg) scale(0.8);
            0;
            blur(5px);
        }
    }
    
    /* Button pulse animation */
    @keyframes pulseButton {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(0,0,0,0.4);
        }
    }
    
    @keyframes superBounce {
        0%, 100% {
            transform: translateY(0) scale(1) rotateZ(0deg);
        }
        25% {
            transform: translateY(-20px) scale(1.1) rotateZ(-5deg);
        }
        50% {
            transform: translateY(-10px) scale(1.05) rotateZ(0deg);
        }
        75% {
            transform: translateY(-15px) scale(1.1) rotateZ(5deg);
        }
    }
    
    @keyframes trailFade {
        from {
            1;
            scale(1) rotate(0deg);
        }
        to {
            0;
            scale(0.3) rotate(180deg) translateY(-50px);
        }
    }
    
    @keyframes dancerBurst {
        from {
            1;
            scale(0.5) rotate(0deg);
        }
        to {
            0;
            scale(1.5) rotate(360deg) translateX(\${Math.random() * 200 - 100}px) translateY(\${Math.random() * 200 - 100}px);
        }
    }
    
    /* Pulsing background effects */
    @keyframes backgroundPulse {
        0% {
            filter: brightness(1) saturate(1.2) hue-rotate(0deg);
        }
        50% {
            filter: brightness(1.3) saturate(1.8) hue-rotate(15deg);
        }
        100% {
            filter: brightness(1.1) saturate(1.5) hue-rotate(30deg);
        }
    }
    
    /* Special message effects */
    @keyframes specialGlow {
        from {
            text-shadow: 
                2px 2px 4px rgba(0,0,0,0.8),
                0 0 20px rgba(255,255,255,0.5);
        }
        to {
            text-shadow: 
                2px 2px 4px rgba(0,0,0,0.8),
                0 0 40px rgba(255,215,0,1),
                0 0 60px rgba(255,105,180,0.8);
        }
    }
    
    /* New Christmas Effect Animations */
    @keyframes fireworkBurst {
        0% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateX(calc(cos(var(--angle) * 3.14159 / 180) * var(--distance))) translateY(calc(sin(var(--angle) * 3.14159 / 180) * var(--distance))) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes shootingStar {
        0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
        }
        100% {
            transform: translateX(calc(100vw + 100px)) translateY(-200px) rotate(-45deg);
            opacity: 0;
        }
    }
    
    @keyframes videoBorderBlink {
        0% { 
            border-color: #FF0000;
            box-shadow: 0 0 25px #FF0000, 0 0 50px #FF0000;
        }
        14.28% { 
            border-color: #FF8000;
            box-shadow: 0 0 25px #FF8000, 0 0 50px #FF8000;
        }
        28.56% { 
            border-color: #FFFF00;
            box-shadow: 0 0 25px #FFFF00, 0 0 50px #FFFF00;
        }
        42.84% { 
            border-color: #80FF00;
            box-shadow: 0 0 25px #80FF00, 0 0 50px #80FF00;
        }
        57.12% { 
            border-color: #00FF00;
            box-shadow: 0 0 25px #00FF00, 0 0 50px #00FF00;
        }
        71.4% { 
            border-color: #00FFFF;
            box-shadow: 0 0 25px #00FFFF, 0 0 50px #00FFFF;
        }
        85.68% { 
            border-color: #0080FF;
            box-shadow: 0 0 25px #0080FF, 0 0 50px #0080FF;
        }
        100% { 
            border-color: #FF0000;
            box-shadow: 0 0 25px #FF0000, 0 0 50px #FF0000;
        }
    }
    
    @keyframes borderLightsCycle {
        0% { 
            background-color: #FF0000;
            box-shadow: 0 0 12px #FF0000, 0 0 24px #FF0000;
            opacity: 1;
            transform: scale(1);
        }
        14.28% { 
            background-color: #FF8000;
            box-shadow: 0 0 12px #FF8000, 0 0 24px #FF8000;
            opacity: 1;
            transform: scale(1.3);
        }
        28.56% { 
            background-color: #FFFF00;
            box-shadow: 0 0 12px #FFFF00, 0 0 24px #FFFF00;
            opacity: 1;
            transform: scale(1);
        }
        42.84% { 
            background-color: #80FF00;
            box-shadow: 0 0 12px #80FF00, 0 0 24px #80FF00;
            opacity: 1;
            transform: scale(1.3);
        }
        57.12% { 
            background-color: #00FF00;
            box-shadow: 0 0 12px #00FF00, 0 0 24px #00FF00;
            opacity: 1;
            transform: scale(1);
        }
        71.4% { 
            background-color: #00FFFF;
            box-shadow: 0 0 12px #00FFFF, 0 0 24px #00FFFF;
            opacity: 1;
            transform: scale(1.3);
        }
        85.68% { 
            background-color: #0080FF;
            box-shadow: 0 0 12px #0080FF, 0 0 24px #0080FF;
            opacity: 1;
            transform: scale(1);
        }
        100% { 
            background-color: #FF0000;
            box-shadow: 0 0 12px #FF0000, 0 0 24px #FF0000;
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes auroraWave {
        0% { 
            opacity: 0;
            transform: skewX(0deg);
        }
        25% { 
            opacity: 0.6;
            transform: skewX(5deg);
        }
        50% { 
            opacity: 0.3;
            transform: skewX(-3deg);
        }
        75% { 
            opacity: 0.8;
            transform: skewX(2deg);
        }
        100% { 
            opacity: 0;
            transform: skewX(0deg);
        }
    }
    
    @keyframes enhancedSnowFall {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(calc(100vh + 50px)) translateX(200px) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes dancerBurst {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) translateX(100px) translateY(-100px) scale(1.5) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Global audio unlock function for user interaction
function enableAudio() {
    const video = document.getElementById('christmas-video');
    if (video) {
        video.muted = false;
        video.volume = 1.0;
        console.log('🎵 Audio enabled globally on user interaction!');

        // Force play if not playing
        if (video.paused) {
            video.play().catch(e => console.log('Play attempt:', e));
        }
    }
}

// Enhanced global audio activation - more aggressive approach
function forceAudioActivation() {
    const video = document.getElementById('christmas-video');
    if (video) {
        video.muted = false;
        video.volume = 1.0;

        // Set audio attributes directly
        video.setAttribute('muted', 'false');
        video.removeAttribute('muted');

        console.log('🔊 FORCED audio activation!');
    }
}

// Add multiple event listeners for maximum audio unlock coverage
document.addEventListener('click', enableAudio, { once: true });
document.addEventListener('touchstart', enableAudio, { once: true });
document.addEventListener('keydown', enableAudio, { once: true });
document.addEventListener('mousedown', forceAudioActivation, { once: true });
document.addEventListener('touchend', forceAudioActivation, { once: true });

// Additional forced audio activation on window focus
window.addEventListener('focus', forceAudioActivation, { once: true });