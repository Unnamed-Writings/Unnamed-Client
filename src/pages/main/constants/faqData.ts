export interface faqDataPropTypes {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_DATA: faqDataPropTypes[] = [
  {
    id: 1,
    question: '작자미상으로 글을 써도 다른 사람들이 알 수 있나요?',
    answer:
      '작자미상은 글쓴이가 누군지 알 수 없는 철저한 익명의 상태입니다. 작자미상으로 글을 쓰면, 유저는 글쓴이의 어떠한 정보도 모른 채 글의 제목과 내용만을 볼 수 있습니다. 반면, 필명은 모임 안에서 사용되는 닉네임으로 글쓴이를 표현하는 기능입니다.  필명으로 글을 쓰면 유저들은 글쓴이가 설정한 필명 및 소개도 볼 수 있습니다. 자신을 완전히 드러내 글을 쓰고 싶다면, 필명을 실명으로 설정하는 방법도 있습니다.',
  },
  {
    id: 2,
    question: '글 모임은 몇 개까지 가입 가능한가요?',
    answer:
      '본인이 만든 글 모임을 포함하여 최대 3개까지 가입이 가능합니다. 마일은 너무 많은 글 모임에서 활동하는 것보다 소수의 글 모임에 집중하여 더 좋은 글을 쓰길 희망합니다. 많은 모임보다는, 하나 하나의 모임에 집중하여 마음을 담은 글을 써보는 건 어떨까요?',
  },
  {
    id: 3,
    question: '가장 궁금한 작가와 가장 궁금한 글의 기준이 무엇인가요?',
    answer:
      "'궁금한 글쓴이'의 경우, 일주일 동안 '궁금해요'를 가장 많이 받은 필명의 글쓴이 2명이 선정됩니다. '인기 있는 글'의 경우, 일주일 동안 ‘궁금해요’를 가장 많이 받은 2개의 글이 선정됩니다. 이는 필명 / 작자미상 여부에 관계 없이 선정됩니다. 궁금한 글쓴이와 인기 있는 글 모두 매주 월요일마다 새롭게 알려드릴게요.",
  },
  {
    id: 4,
    question: '궁금해요가 많이 눌리면, 작가가 누구인지 알 수 있나요?',
    answer:
      '글쓴이가 누구인지는 알 수 없습니다. 궁금해요 기능은 필명이나 작자미상 속 글쓴이가 실제로 누구인지를 알아내기 위한 기능이 아닙니다. 글쓴이가 누구인지 궁금할 정도로 좋은 글이라는 것을 표현할 수 있는 기능입니다. 이는 ‘궁금한 글쓴이’와 ‘인기 있는 글’을 선정하는 기준으로 활용됩니다.',
  },
  {
    id: 5,
    question: '글 모임 피드가 메인페이지에 노출되려면 어떻게 해야 하나요?',
    answer:
      '마일에서는 한 모임 내에서 중복된 필명 생성이 불가능합니다. 같은 모임에 없는, 중복되지 않는 필명으로 설정해 주시기 바랍니다. 다른 모임에서는 해당 필명을 사용하고 있는 글쓴이가 없다면 생성이 가능합니다.',
  },
  {
    id: 6,
    question: '필명은 중복이 가능한가요?',
    answer:
      '마일에서는 한 모임 내에서 중복된 필명 생성이 불가능합니다. 같은 모임에 없는, 중복되지 않는 필명으로 설정해 주시기 바랍니다. 다른 모임에서는 해당 필명을 사용하고 있는 글쓴이가 없다면 생성이 가능합니다.',
  },
];
