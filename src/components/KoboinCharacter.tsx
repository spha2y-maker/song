import React from 'react';
import { motion } from 'motion/react';
import { SentenceItem } from '../types';
import { soundManager, speakKorean } from '../utils/soundEffects';

interface KoboinCharacterProps {
  animationType?: SentenceItem['animationType'] | 'celebrate' | 'idle' | 'happy_wave';
  costume?: 'default' | 'glasses' | 'crown' | 'cape';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSpeechBubble?: boolean;
  speechText?: string;
  onClick?: () => void;
  className?: string;
}

export const KoboinCharacter: React.FC<KoboinCharacterProps> = ({
  animationType = 'idle',
  costume = 'default',
  size = 'md',
  showSpeechBubble = false,
  speechText = '안녕! 난 씩씩한 남자 아이 토끼 코보인이야!',
  onClick,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-44 h-44',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80'
  };

  const handleCharacterClick = () => {
    soundManager.playKoboinBounce();
    if (onClick) {
      onClick();
    } else {
      speakKorean(speechText);
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center select-none ${className}`}
      onClick={handleCharacterClick}
    >
      {/* Speech bubble for Koboin */}
      {showSpeechBubble && speechText && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="mb-2 max-w-xs px-3.5 py-2 bg-white text-slate-800 rounded-2xl shadow-md border-2 border-amber-200 text-sm md:text-base font-semibold text-center relative z-20"
        >
          <span>{speechText}</span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-amber-200 rotate-45" />
        </motion.div>
      )}

      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        {/* Background aura / ambient glow for certain scenes */}
        {animationType === 'bright_light' && (
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-yellow-300 rounded-full blur-2xl -z-10"
          />
        )}
        {animationType === 'clear_sky' && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 bg-gradient-to-tr from-sky-200 via-yellow-100 to-sky-300 rounded-full blur-xl opacity-50 -z-10"
          />
        )}
        {animationType === 'strong_arm' && (
          <motion.div
            animate={{ scale: [0.95, 1.1, 0.95] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="absolute inset-2 bg-orange-300 rounded-full blur-xl opacity-40 -z-10"
          />
        )}

        {/* Main Vector SVG Illustration of Koboin */}
        <motion.svg
          viewBox="0 0 240 240"
          className="w-full h-full drop-shadow-md"
          animate={
            animationType === 'celebrate'
              ? { y: [0, -18, 0, -12, 0], scale: [1, 1.05, 1] }
              : animationType === 'reading'
              ? { y: [0, -2, 0] }
              : animationType === 'kneeling'
              ? { y: [0, 4, 0] }
              : animationType === 'stepping_grass'
              ? { y: [0, -8, 0], rotate: [-2, 2, -2] }
              : animationType === 'reluctant'
              ? { rotate: [-4, 4, -4] }
              : { y: [0, -4, 0] }
          }
          transition={{
            duration: animationType === 'celebrate' ? 0.7 : 2.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <defs>
            <radialGradient id="bunnyFur" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFDF7" />
              <stop offset="85%" stopColor="#FDECD2" />
              <stop offset="100%" stopColor="#F5DCB7" />
            </radialGradient>
            <radialGradient id="earPink" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFCCD5" />
              <stop offset="100%" stopColor="#FFA6B9" />
            </radialGradient>
            <linearGradient id="carrotGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FF4D00" />
            </linearGradient>
            <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ADE80" />
              <stop offset="100%" stopColor="#16A34A" />
            </linearGradient>
          </defs>

          {/* Situation Specific Back Props */}
          {animationType === 'clear_sky' && (
            <g opacity="0.9">
              {/* Rainbow */}
              <path d="M 30,190 A 90,90 0 0,1 210,190" fill="none" stroke="#FDA4AF" strokeWidth="8" />
              <path d="M 36,190 A 84,84 0 0,1 204,190" fill="none" stroke="#FDE047" strokeWidth="6" />
              <path d="M 42,190 A 78,78 0 0,1 198,190" fill="none" stroke="#67E8F9" strokeWidth="6" />
              {/* Sun */}
              <circle cx="195" cy="45" r="16" fill="#FBBF24" />
              <circle cx="45" cy="65" r="14" fill="#FFFFFF" opacity="0.8" />
              <circle cx="60" cy="60" r="18" fill="#FFFFFF" opacity="0.8" />
              <circle cx="75" cy="65" r="14" fill="#FFFFFF" opacity="0.8" />
            </g>
          )}

          {animationType === 'stepping_grass' && (
            <g>
              <ellipse cx="120" cy="210" rx="100" ry="18" fill="url(#grassGrad)" opacity="0.85" />
              <circle cx="65" cy="205" r="4" fill="#F43F5E" />
              <circle cx="70" cy="208" r="3" fill="#FBBF24" />
              <circle cx="175" cy="204" r="4" fill="#EC4899" />
              <circle cx="180" cy="207" r="3" fill="#FBBF24" />
            </g>
          )}

          {animationType === 'wide_field' && (
            <g>
              {/* Playground running track curve */}
              <path d="M 20,205 Q 120,185 220,205" stroke="#F97316" strokeWidth="24" strokeLinecap="round" fill="none" opacity="0.4" />
              <path d="M 20,205 Q 120,185 220,205" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6,6" fill="none" />
            </g>
          )}

          {/* Bunny Body */}
          <ellipse cx="120" cy="165" rx="46" ry="42" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="3" />

          {/* Bunny Belly */}
          <ellipse cx="120" cy="170" rx="28" ry="26" fill="#FFF8EE" />

          {/* Costumes or Situation Clothing */}
          {costume === 'cape' && (
            <path d="M 85,150 Q 60,200 70,215 Q 120,205 170,215 Q 180,200 155,150 Z" fill="#EF4444" opacity="0.9" />
          )}

          {animationType === 'short_pants' && (
            <g>
              {/* Cute short dungarees showing ankles */}
              <path d="M 90,165 L 150,165 L 146,192 L 126,192 L 120,180 L 114,192 L 94,192 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
              {/* Suspenders */}
              <line x1="98" y1="150" x2="102" y2="165" stroke="#3B82F6" strokeWidth="4" />
              <line x1="142" y1="150" x2="138" y2="165" stroke="#3B82F6" strokeWidth="4" />
              {/* Pockets with stitch marks */}
              <rect x="100" y="172" width="14" height="12" rx="3" fill="#60A5FA" />
            </g>
          )}

          {animationType === 'reluctant' && (
            /* Wrapped snugly in a polka dot blanket */
            <g>
              <ellipse cx="120" cy="180" rx="55" ry="38" fill="#FDE047" stroke="#EAB308" strokeWidth="3" />
              <circle cx="85" cy="175" r="4" fill="#F97316" opacity="0.6" />
              <circle cx="110" cy="190" r="4" fill="#F97316" opacity="0.6" />
              <circle cx="140" cy="178" r="4" fill="#F97316" opacity="0.6" />
              <circle cx="155" cy="195" r="4" fill="#F97316" opacity="0.6" />
            </g>
          )}

          {/* Bunny Left Ear */}
          <motion.g
            animate={
              animationType === 'reluctant'
                ? { rotate: [-15, -8, -15] }
                : animationType === 'sick'
                ? { rotate: [-12, -18, -12] }
                : { rotate: [-5, 2, -5] }
            }
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originX: '95px', originY: '95px' }}
          >
            <ellipse cx="90" cy="55" rx="16" ry="42" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="3" transform="rotate(-12 90 55)" />
            <ellipse cx="90" cy="58" rx="9" ry="32" fill="url(#earPink)" transform="rotate(-12 90 58)" />
          </motion.g>

          {/* Bunny Right Ear */}
          <motion.g
            animate={
              animationType === 'reluctant'
                ? { rotate: [15, 8, 15] }
                : animationType === 'sick'
                ? { rotate: [12, 18, 12] }
                : { rotate: [5, -2, 5] }
            }
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originX: '145px', originY: '95px' }}
          >
            <ellipse cx="150" cy="55" rx="16" ry="42" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="3" transform="rotate(12 150 55)" />
            <ellipse cx="150" cy="58" rx="9" ry="32" fill="url(#earPink)" transform="rotate(12 150 58)" />
          </motion.g>

          {/* Ice pack on head for 'sick' (감기를 앓다) */}
          {animationType === 'sick' && (
            <g>
              <path d="M 105,75 Q 120,55 135,75 Q 120,82 105,75 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
              <rect x="115" y="52" width="10" height="8" rx="2" fill="#0284C7" />
              <circle cx="118" cy="72" r="2.5" fill="#BAE6FD" />
              <circle cx="127" cy="74" r="2" fill="#BAE6FD" />
            </g>
          )}

          {/* Crown for master / reward */}
          {costume === 'crown' && (
            <g>
              <polygon points="100,75 106,55 120,68 134,55 140,75" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
              <circle cx="106" cy="54" r="3" fill="#EF4444" />
              <circle cx="120" cy="66" r="3.5" fill="#3B82F6" />
              <circle cx="134" cy="54" r="3" fill="#10B981" />
            </g>
          )}

          {/* Bunny Head */}
          <ellipse cx="120" cy="115" rx="46" ry="40" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="3" />

          {/* Cheeks */}
          <circle cx="92" cy="126" r="10" fill="#FF8BA7" opacity="0.45" />
          <circle cx="148" cy="126" r="10" fill="#FF8BA7" opacity="0.45" />

          {/* Eyes */}
          {animationType === 'kneeling' ? (
            /* Respectful closed smiling eyes */
            <g>
              <path d="M 96,115 Q 104,122 112,115" fill="none" stroke="#5D4037" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 128,115 Q 136,122 144,115" fill="none" stroke="#5D4037" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          ) : animationType === 'sick' ? (
            /* Teary or slightly sad eyes */
            <g>
              <ellipse cx="104" cy="116" rx="4.5" ry="6" fill="#3E2723" />
              <ellipse cx="136" cy="116" rx="4.5" ry="6" fill="#3E2723" />
              {/* Teardrop */}
              <circle cx="95" cy="125" r="2.5" fill="#38BDF8" />
            </g>
          ) : animationType === 'reluctant' ? (
            /* Grumpy cute face */
            <g>
              <ellipse cx="104" cy="116" rx="5" ry="6" fill="#3E2723" />
              <ellipse cx="136" cy="116" rx="5" ry="6" fill="#3E2723" />
              <path d="M 98,107 L 108,110" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 142,107 L 132,110" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          ) : (
            /* Big sparkly happy rabbit eyes */
            <g>
              <ellipse cx="104" cy="115" rx="6" ry="8" fill="#2E1B15" />
              <ellipse cx="136" cy="115" rx="6" ry="8" fill="#2E1B15" />
              {/* Highlights */}
              <circle cx="102" cy="112" r="2.8" fill="#FFFFFF" />
              <circle cx="106" cy="118" r="1.4" fill="#FFFFFF" />
              <circle cx="134" cy="112" r="2.8" fill="#FFFFFF" />
              <circle cx="138" cy="118" r="1.4" fill="#FFFFFF" />
            </g>
          )}

          {/* Glasses for reading or costume */}
          {(costume === 'glasses' || animationType === 'reading') && (
            <g>
              <circle cx="104" cy="115" r="12" fill="none" stroke="#DC2626" strokeWidth="2.5" />
              <circle cx="136" cy="115" r="12" fill="none" stroke="#DC2626" strokeWidth="2.5" />
              <line x1="116" y1="115" x2="124" y2="115" stroke="#DC2626" strokeWidth="2.5" />
              <path d="M 92,113 L 80,110" stroke="#DC2626" strokeWidth="2" />
              <path d="M 148,113 L 160,110" stroke="#DC2626" strokeWidth="2" />
            </g>
          )}

          {/* Cute Nose and Whiskers */}
          <polygon points="117,124 123,124 120,128" fill="#F43F5E" />
          {/* Whiskers */}
          <line x1="72" y1="124" x2="88" y2="125" stroke="#A88B6E" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="72" y1="131" x2="87" y2="130" stroke="#A88B6E" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="168" y1="124" x2="152" y2="125" stroke="#A88B6E" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="168" y1="131" x2="153" y2="130" stroke="#A88B6E" strokeWidth="1.8" strokeLinecap="round" />

          {/* Mouth */}
          {animationType === 'sick' ? (
            /* Thermometer */
            <g>
              <line x1="118" y1="132" x2="122" y2="132" stroke="#5D4037" strokeWidth="2" />
              <rect x="122" y="130" width="22" height="4" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
              <line x1="122" y1="132" x2="138" y2="132" stroke="#EF4444" strokeWidth="2.5" />
            </g>
          ) : animationType === 'empty_pockets' ? (
            /* 'O' surprised mouth */
            <ellipse cx="120" cy="133" rx="4" ry="5" fill="#991B1B" />
          ) : (
            /* Sweet smile */
            <path d="M 114,130 Q 120,136 126,130" fill="none" stroke="#5D4037" strokeWidth="2.2" strokeLinecap="round" />
          )}

          {/* Cute Boy Bunny Blue Bowtie */}
          {animationType !== 'sick' && animationType !== 'reluctant' && (
            <g transform="translate(120, 142)">
              <polygon points="-9,-5 0,-1.5 -9,5" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.2" />
              <polygon points="9,-5 0,-1.5 9,5" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="3" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1.2" />
            </g>
          )}

          {/* Feet / Paws */}
          {animationType === 'kneeling' ? (
            /* Kneeling posture */
            <g>
              <ellipse cx="102" cy="202" rx="14" ry="8" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
              <ellipse cx="138" cy="202" rx="14" ry="8" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
            </g>
          ) : (
            /* Standard standing/stepping feet */
            <g>
              <ellipse cx="98" cy="205" rx="16" ry="10" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
              <ellipse cx="142" cy="205" rx="16" ry="10" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
              <line x1="92" y1="202" x2="92" y2="209" stroke="#D1B287" strokeWidth="1.5" />
              <line x1="98" y1="202" x2="98" y2="210" stroke="#D1B287" strokeWidth="1.5" />
              <line x1="142" y1="202" x2="142" y2="210" stroke="#D1B287" strokeWidth="1.5" />
              <line x1="148" y1="202" x2="148" y2="209" stroke="#D1B287" strokeWidth="1.5" />
            </g>
          )}

          {/* FRONT PROPS & ACTIONS */}
          {/* 1. reading (책을 읽다) */}
          {animationType === 'reading' && (
            <g>
              {/* Big colorful open book */}
              <path d="M 80,155 Q 120,165 120,185 Q 120,165 160,155 L 160,195 Q 120,185 120,205 Q 120,185 80,195 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2.5" />
              <path d="M 82,157 Q 120,167 120,185 Q 120,167 158,157 L 158,193 Q 120,183 120,203 Q 120,183 82,193 Z" fill="#FEF3C7" />
              {/* Book lines & carrot icon in book */}
              <line x1="88" y1="168" x2="114" y2="168" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
              <line x1="88" y1="176" x2="110" y2="176" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
              <line x1="126" y1="168" x2="152" y2="168" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
              <circle cx="139" cy="180" r="4" fill="#F97316" />
              {/* Hands holding book */}
              <ellipse cx="78" cy="178" rx="8" ry="7" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
              <ellipse cx="162" cy="178" rx="8" ry="7" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
            </g>
          )}

          {/* 2. kneeling (무릎을 꿇다) */}
          {animationType === 'kneeling' && (
            <g>
              {/* Folded hands in front bowing */}
              <ellipse cx="120" cy="165" rx="14" ry="10" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
              <path d="M 112,165 Q 120,170 128,165" stroke="#D1B287" strokeWidth="1.5" fill="none" />
            </g>
          )}

          {/* 3. digging (구멍을 뚫다) */}
          {animationType === 'digging' && (
            <g>
              {/* Hole in ground */}
              <ellipse cx="120" cy="208" rx="55" ry="18" fill="#451A03" stroke="#78350F" strokeWidth="3" />
              <ellipse cx="120" cy="208" rx="42" ry="12" fill="#1C0A00" />
              {/* Little shovel */}
              <line x1="165" y1="140" x2="155" y2="200" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
              <path d="M 148,195 L 162,192 L 158,212 L 144,210 Z" fill="#64748B" />
              {/* Dirt specks flying */}
              <circle cx="95" cy="185" r="3" fill="#78350F" />
              <circle cx="85" cy="195" r="2" fill="#92400E" />
              <circle cx="155" cy="180" r="2.5" fill="#78350F" />
            </g>
          )}

          {/* 4. comforting (고양이가 가엾다) */}
          {animationType === 'comforting' && (
            <g>
              {/* Yellow umbrella over kitty */}
              <path d="M 45,130 A 35,35 0 0,1 115,130 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
              <line x1="80" y1="130" x2="80" y2="165" stroke="#CA8A04" strokeWidth="3" strokeLinecap="round" />
              <path d="M 80,165 Q 80,172 75,172" fill="none" stroke="#CA8A04" strokeWidth="3" />
              {/* Little cute shivering cat */}
              <ellipse cx="65" cy="185" rx="14" ry="12" fill="#94A3B8" />
              <polygon points="53,176 57,166 63,174" fill="#94A3B8" />
              <polygon points="67,174 73,166 77,176" fill="#94A3B8" />
              <circle cx="61" cy="182" r="1.5" fill="#0F172A" />
              <circle cx="69" cy="182" r="1.5" fill="#0F172A" />
              {/* Koboin gently stroking */}
              <ellipse cx="88" cy="175" rx="8" ry="7" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
              {/* Floating heart */}
              <path d="M 125,95 Q 120,85 130,85 Q 135,90 135,95 Q 135,90 140,85 Q 150,85 145,95 Q 135,110 135,110 Q 135,110 125,95 Z" fill="#F43F5E" opacity="0.9" />
            </g>
          )}

          {/* 5. sick (감기를 앓다) */}
          {animationType === 'sick' && (
            <g>
              {/* Warm red knitted scarf */}
              <path d="M 85,142 Q 120,154 155,142 Q 148,162 120,162 Q 92,162 85,142 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
              <rect x="135" y="152" width="16" height="32" rx="3" fill="#DC2626" />
              <line x1="135" y1="184" x2="151" y2="184" stroke="#FEF2F2" strokeWidth="2" strokeDasharray="3,2" />
            </g>
          )}

          {/* 6. thin_paper (종이가 얇다) */}
          {animationType === 'thin_paper' && (
            <g>
              {/* Feather-thin waving paper sheet */}
              <motion.path
                d="M 115,140 Q 140,135 155,145 Q 150,180 130,175 Q 110,180 115,140 Z"
                fill="#F8FAFC"
                stroke="#64748B"
                strokeWidth="1.5"
                animate={{ rotate: [-2, 3, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <ellipse cx="110" cy="155" rx="7" ry="6" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
              <ellipse cx="145" cy="155" rx="7" ry="6" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
            </g>
          )}

          {/* 8. strong_arm (팔뚝이 굵다) */}
          {animationType === 'strong_arm' && (
            <g>
              {/* Carrot dumbbell */}
              <rect x="50" y="135" width="40" height="6" rx="3" fill="#78350F" />
              {/* Giant carrot on left */}
              <polygon points="45,120 45,156 25,138" fill="url(#carrotGrad)" />
              <polygon points="95,120 95,156 115,138" fill="url(#carrotGrad)" />
              {/* Muscular flexed paw */}
              <ellipse cx="70" cy="138" rx="14" ry="12" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2.5" />
              {/* Power sparkle */}
              <path d="M 68,105 L 72,112 L 79,115 L 72,118 L 68,125 L 64,118 L 57,115 L 64,112 Z" fill="#FBBF24" />
            </g>
          )}

          {/* 9. paying (물건값을 치르다) */}
          {animationType === 'paying' && (
            <g>
              {/* Store counter table */}
              <rect x="60" y="180" width="120" height="25" rx="4" fill="#B45309" stroke="#78350F" strokeWidth="2" />
              {/* Carrot basket on counter */}
              <ellipse cx="85" cy="178" rx="16" ry="7" fill="#D97706" />
              <polygon points="82,165 92,165 87,178" fill="url(#carrotGrad)" />
              {/* Gold coin handed out */}
              <circle cx="140" cy="165" r="9" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
              <text x="140" y="169" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#78350F">₩</text>
              {/* Paw holding coin */}
              <ellipse cx="125" cy="168" rx="7" ry="6" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
            </g>
          )}

          {/* 13. empty_pockets (구슬이 없다) */}
          {animationType === 'empty_pockets' && (
            <g>
              {/* Empty pockets pulled inside out */}
              <path d="M 85,170 Q 70,175 75,190 Q 90,185 92,175 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
              <path d="M 155,170 Q 170,175 165,190 Q 150,185 148,175 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
              {/* Question marks floating */}
              <text x="70" y="150" fontSize="18" fontWeight="bold" fill="#F59E0B">?</text>
              <text x="165" y="150" fontSize="18" fontWeight="bold" fill="#F59E0B">?</text>
            </g>
          )}

          {/* 15. bright_light (불빛이 밝다) */}
          {animationType === 'bright_light' && (
            <g>
              {/* Glowing carrot lantern */}
              <line x1="165" y1="125" x2="165" y2="150" stroke="#78350F" strokeWidth="2" />
              <polygon points="155,150 175,150 165,185" fill="#F97316" stroke="#C2410C" strokeWidth="2" />
              <circle cx="165" cy="165" r="7" fill="#FEF08A" />
              {/* Light rays */}
              <line x1="165" y1="140" x2="165" y2="135" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
              <line x1="185" y1="165" x2="195" y2="165" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
              <line x1="145" y1="165" x2="135" y2="165" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
              {/* Paw holding lantern stick */}
              <ellipse cx="150" cy="148" rx="8" ry="7" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" />
            </g>
          )}

          {/* Celebrate animation extras */}
          {animationType === 'celebrate' && (
            <g>
              {/* Arms raised up in victory */}
              <ellipse cx="78" cy="130" rx="9" ry="16" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" transform="rotate(-35 78 130)" />
              <ellipse cx="162" cy="130" rx="9" ry="16" fill="url(#bunnyFur)" stroke="#E2C79E" strokeWidth="2" transform="rotate(35 162 130)" />
              {/* Carrots flying */}
              <polygon points="45,65 55,65 50,85" fill="url(#carrotGrad)" transform="rotate(-20 50 75)" />
              <polygon points="185,65 195,65 190,85" fill="url(#carrotGrad)" transform="rotate(20 190 75)" />
            </g>
          )}
        </motion.svg>
      </div>
    </div>
  );
};
