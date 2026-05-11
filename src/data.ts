export const loreData = [
  {
    title: "계급과 작위",
    description: "왕족을 제외한 귀족의 계급은 공작(Duke), 후작(Marquess), 백작(Earl/Count), 자작(Viscount), 남작(Baron) 순으로 이루어집니다. 이외에도 준남작(Baronet)과 기사(Knight)가 있으나, 이들은 귀족원 의석을 갖지 않는 하급 귀족으로 분류됩니다.",
  },
  {
    title: "사교계 시즌",
    description: "매년 봄부터 여름까지 런던에서 열리는 사교계 시즌은 귀족 가문의 젊은 남녀가 짝을 찾는 가장 중요한 시기입니다. 무도회, 만찬, 오페라 관람 등 연일 화려한 행사가 이어집니다.",
  },
  {
    title: "예의범절 (Etiquette)",
    description: "정식으로 소개받지 않은 남녀가 대화를 나누는 것은 엄격히 금지됩니다. 무도회에서는 한 파트너와 두 번 이상 춤을 추는 것은 결혼을 전제로 한 깊은 관계로 간주되므로 주의해야 합니다.",
  },
  {
    title: "가문의 영지",
    description: "대부분의 고위 귀족들은 시골에 방대한 영지와 대저택을 소유하고 있으며, 철이 지나면 런던을 떠나 영지에서 사냥과 휴식을 즐깁니다.",
  }
];

// Placeholder image URLs that match the aspect ratios
const PLACEHOLDER_3_4 = "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=533"; // Generic vintage portrait placeholder
const PLACEHOLDER_1_1 = "https://images.unsplash.com/photo-1629851610486-ed5014bdf735?auto=format&fit=crop&q=80&w=400&h=400"; // Generic vintage pattern/location placeholder
// Will use different unsplash images to give some variety, using keywords like regency, royalty, portrait, vintage, castle

const generateCharacters = (count: number) => {
  const chars = [];
  const families = ["블랙우드 공작 가문", "헤이스팅스 후작 가문", "윈저 백작 가문", "스털링 자작 가문", "오크 부르크 남작 가문", "왕실"];
  for (let i = 1; i <= count; i++) {
    chars.push({
      id: i,
      name: `캐릭터 ${i}`,
      family: families[i % families.length],
      shortDesc: "사교계의 중심에 선 매력적인 인물입니다.",
      description: `이곳에는 캐릭터 ${i}의 상세한 배경 설정과 성격, 그리고 얽혀있는 로맨스 서사가 들어갑니다. 매우 섬세하고 아름다운 외모를 지녔으며, 항상 우아한 태도를 유지합니다.`,
      mainImage: `https://images.unsplash.com/photo-1541260894924-7eb0546d0472?auto=format&fit=crop&q=80&w=400&h=533&sig=${i}`, // slight variation
      subImages: [
        `https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?auto=format&fit=crop&q=80&w=600&h=800&sig=${i*10+1}`,
        `https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=800&sig=${i*10+2}`,
        `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=800&sig=${i*10+3}`
      ]
    });
  }
  return chars;
};

export const characterData = generateCharacters(22);

export const geographyData = [
  {
    id: 'g1',
    name: "클레어몬트 팰리스",
    description: "왕실의 거처이자 모든 사교계 무도회의 중심이 되는 웅장한 궁전입니다. 화려한 샹들리에와 금박 장식이 돋보입니다.",
    image: "https://images.unsplash.com/photo-1605814389928-1b63bd506bd2?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 'g2',
    name: "블랙우드 영지",
    description: "런던 외곽에 위치한 끝없이 펼쳐진 초원과 거대한 장미 정원을 자랑하는 대공의 저택입니다.",
    image: "https://images.unsplash.com/photo-1585544314038-a0d37698102a?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 'g3',
    name: "하이드 파크 로맨스 길",
    description: "사교계 남녀가 마차를 타거나 산책을 하며 은밀한 시선을 교환하는 도심 속 아름다운 공원입니다.",
    image: "https://images.unsplash.com/photo-1505307371917-a16f272c72b2?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 'g4',
    name: "마담 델라크루아의 양장점",
    description: "귀부인들이 최신 프랑스 실크와 레이스를 구하기 위해 모여드는 가장 인기 있는 드레스 샵입니다.",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 'g5',
    name: "국립 오페라 극장",
    description: "음악감상보다는 사교와 과시, 그리고 비밀스러운 만남이 주가 되는 화려한 스탈의 박스석을 갖춘 극장입니다.",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 'g6',
    name: "헤이스팅스 영지",
    description: "오래된 숲과 호수를 품고 있는 고풍스러운 성으로, 약간의 미스터리가 감도는 곳입니다.",
    image: "https://images.unsplash.com/photo-1558450162-81c002bdfab4?auto=format&fit=crop&q=80&w=600&h=600"
  }
];
