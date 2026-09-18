// Web Audio API procedural sound engine & Web Speech API TTS for Koboin (Cute Boy Rabbit)

class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a happy success chime
  playCorrect() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    // Arpeggio note sequence: C5 -> E5 -> G5 -> C6
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.08);
    osc.frequency.setValueAtTime(783.99, now + 0.16);
    osc.frequency.setValueAtTime(1046.5, now + 0.24);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.65);
  }

  // Play gentle pop sound when picking carrots
  playCarrotPop() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  // Play Koboin's cute cheerful bunny bounce
  playKoboinBounce() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.12); // D6

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  // Play celebratory fanfare
  playFanfare() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((freq, idx) => {
      const startTime = this.ctx!.currentTime + idx * 0.1;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  }

  // Play gentle 'try again' sound
  playTryAgain() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.25);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }
}

export const soundManager = new SoundEngine();

// Helper to pick the best voice for cute Korean boy rabbit (코보인)
function getCuteBoyVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const koVoices = voices.filter(v => v.lang.includes('ko') || v.lang.includes('KR'));
  if (koVoices.length === 0) return null;

  // Prioritize male / young boy voices (e.g., InJoon, BongJin, MinHo, Male, etc.)
  const boyVoice = koVoices.find(v =>
    /injoon|인준|bongjin|봉진|minho|민호|male|boy|아이/i.test(v.name)
  );
  if (boyVoice) return boyVoice;

  // Fallback to high quality natural Korean voice
  const naturalVoice = koVoices.find(v => /natural|google|neural|kr/i.test(v.name));
  return naturalVoice || koVoices[0];
}

// Pre-load voices on browser ready
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

/**
 * Text To Speech helper for 1st grade elementary learners
 * Styled specifically for "코보인" (귀여운 씩씩한 남자 아이 토끼)
 */
export function speakKorean(text: string, rate = 0.98) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // If text contains bracketed pronunciation like "[익따]", say "발음은 익따!" nicely
  const cleanText = text.replace(/\[(.*?)\]/g, (_, p1) => {
    return '발음은 ' + p1 + ' ';
  });

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ko-KR';

  // 귀여운 남자 아이 토끼 음색 설정 (High cheerful boy pitch & brisk friendly pace)
  // Pitch 1.38 makes the voice sound distinctly like a bright, cute young boy
  utterance.pitch = 1.38;
  utterance.rate = rate; // 0.98 is clear and lively for elementary 1st graders
  utterance.volume = 1.0;

  const boyVoice = getCuteBoyVoice();
  if (boyVoice) {
    utterance.voice = boyVoice;
  }

  window.speechSynthesis.speak(utterance);
}
