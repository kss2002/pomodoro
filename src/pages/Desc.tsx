import { Clock, Target, Coffee, Repeat } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';

type Step = {
  title: string;
  desc: string;
  color: string;
};

const steps: Step[] = [
  {
    title: '집중 시간 (25분)',
    desc: '타이머를 25분으로 설정하고 한 가지 작업에만 집중해요.',
    color: 'bg-red-500',
  },
  {
    title: '짧은 휴식 (5분)',
    desc: '스트레칭, 물 마시기 등 가벼운 활동을 하세요.',
    color: 'bg-green-500',
  },
  {
    title: '반복',
    desc: '이 과정을 4회 반복해요.',
    color: 'bg-purple-500',
  },
  {
    title: '긴 휴식 (20분)',
    desc: '4회를 완료하면 20분간 긴 휴식을 취해요.',
    color: 'bg-blue-500',
  },
];

const effects = [
  '집중력 향상: 짧은 시간 동안 한 가지에만 집중',
  '번아웃 방지: 규칙적인 휴식으로 피로 누적 방지',
  '시간 인식 개선: 작업 시간 파악 능력 향상',
  '동기 부여: 작은 목표 달성으로 성취감 증가',
];

const tips = [
  '뽀모도로 시작 전 해야 할 작업을 명확히 정하세요',
  '25분 동안 방해받지 않도록 환경을 조성하세요',
  '휴식 시간에는 실제로 쉬세요 (SNS 피하기)',
  '자신에게 맞게 시간을 조정해도 괜찮아요',
  '진동은 안드로이드 핸드폰에서만 작동해요',
  '새로고침을 하면 타이머가 멈춰요.',
];

const Card = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-8 h-8" />
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h2>
    </div>
    {children}
  </section>
);

export const Desc = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          <AuroraText>뽀모도로 기법이란?</AuroraText>
        </h1>
        <Card icon={Clock} title="소개">
          <p className="text-lg text-gray-700 leading-relaxed">
            뽀모도로 기법(Pomodoro Technique)은 1980년대 후반 프란체스코
            시릴로가 개발한 시간 관리 방법이에요. 25분간 집중 후 5분 휴식을
            반복하는 방식이며, 토마토 모양의 요리용 타이머에서 이름이
            유래했어요.
          </p>
        </Card>
        <Card icon={Target} title="작동 방식">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div
                  className={`shrink-0 w-8 h-8 rounded-full ${step.color} text-white flex items-center justify-center font-bold`}
                >
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card icon={Coffee} title="효과">
          <ul className="space-y-3 text-lg text-gray-700">
            {effects.map((effect, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>{effect}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card icon={Repeat} title="사용 팁">
          <ul className="space-y-3 text-lg text-gray-700">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </Card>
        <div className="mt-28"></div>
      </div>
    </div>
  );
};
