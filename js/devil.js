// 마신	마왕	마수	마인
// 요마	요귀	요수	요정
// 천사	대천사	타천사	용왕
// 용신	사귀	사룡	사신
// 여신	지모신	파괴신	귀신
// 구니쓰신	성수	신수	영조
// 흉조	지령	정령	악마
// 야마	환마	유귀	외도

// 빨간색 글씨: 특수 합체
// SQ: 서브퀘스트
// Cha: 카오스 루트
// Law: 로우 루트
// DN: 다크 뉴트럴 루트
// NG+: 뉴게임+
const titleList = ['종족', 'Lv', '이름', '체력', '마나', '힘', '체', '마', '속', '운', '물리내성', '화염내성', '빙결내성', '번개내성', '충격내성', '파마내성', '주살내성', '물리', '화염', '빙결', '번개', '충격', '파마', '주살', '만능', '상태', '회복', '보조']

const devilList = [
  ['외도', 1, '슬라임', 41, 40, 5, 6, 4, 3, 4, '-', '약', '약', '약', '약', '약', '-', +1, -3, -3, -3, -3, -3, 0, 0, +3, 0, -1],
  ['요정', 2, '픽시', 32, 82, 2, 4, 7, 8, 6, '-', '-', '-', '-', '내', '-', '약', 0, 0, 0, 0, +1, 0, 0, 0, -1, +1, +1],
  ['유귀', 3, '아귀', 40, 54, 8, 7, 7, 5, 4, '-', '약', '-', '-', '약', '약', '내', +1, 0, +1, 0, 0, -3, +3, 0, 0, -1, 0],
  ['흉조', 4, '온모라키', 42, 59, 5, 8, 8, 7, 6, '-', '내', '약', '-', '약', '-', '-', 0, +2, -3, 0, 0, 0, +1, 0, 0, 0, 0],
  ['군신', 5, '네코쇼군', 57, 73, 6, 11, 7, 4, 8, '-', '약', '-', '무', '약', '내', '-', 0, -1, 0, 0, -3, 0, 0, -4, 0, +3, +3],
  ['요마', 6, '맨드레이크', 49, 75, 6, 7, 9, 11, 9, '-', '약', '-', '내', '-', '-', '-', 0, -3, 0, +1, 0, 0, 0, 0, +3, +1, 0],
  ['지령', 6, '코다마', 46, 65, 5, 8, 9, 8, 9, '-', '약', '약', '-', '내', '-', '-', 0, -3, -3, 0, +2, 0, 0, 0, +1, +1, 0],
  ['마수', 7, '카트시', 54, 70, 10, 7, 10, 7, 5, '-', '-', '-', '내', '약', '-', '-', 0, 0, 0, +1, -3, 0, 0, 0, 0, +1, +1],
  ['요귀', 7, '다이몬', 59, 73, 11, 6, 10, 9, 7, '-', '내', '-', '약', '-', '약', '무', +2, +2, 0, 0, 0, -4, +2, 0, 0, 0, 0],
  ['야마', 8, '샌드맨', 55, 81, 9, 8, 9, 11, 12, '-', '-', '-', '약', '내', '-', '-', +1, 0, 0, -3, +1, 0, 0, 0, +3, 0, -1],
  ['정령', 9, '어시즈', 73, 62, 8, 12, 11, 9, 9, '-', '-', '-', '내', '약', '-', '-', 0, 0, 0, +3, -4, 0, 0, 0, +1, 0, 0],
  ['천사', 10, '엔젤', 59, 103, 6, 8, 16, 12, 12, '-', '-', '-', '-', '약', '무', '약', 0, 0, 0, 0, -3, +3, -4, 0, 0, +2, +2],
  ['요마', 10, '아가시온', 55, 93, 7, 9, 14, 11, 11, '-', '-', '약', '무', '-', '-', '약', 0, 0, -4, +2, 0, 0, 0, 0, 0, 0, +2],
  ['사귀', 11, '투르다크', 80, 70, 15, 13, 7, 10, 8, '-', '-', '-', '-', '약', '-', '내', +2, 0, 0, 0, -3, 0, +1, 0, 0, 0, 0],
  ['요귀', 11, '아즈미', 68, 77, 10, 10, 12, 13, 12, '-', '-', '내', '약', '-', '-', '-', 0, 0, +2, -3, 0, 0, 0, 0, 0, +1, 0],
  ['정령', 12, '에어로스', 62, 99, 9, 9, 17, 11, 12, '-', '-', '-', '약', '내', '-', '-', 0, 0, 0, -4, +3, 0, 0, 0, +1, 0, 0],
  ['귀녀', 12, '머메이드', 72, 122, 8, 9, 17, 11, 15, '-', '약', '무', '약', '-', '-', '-', -2, -2, +3, -4, 0, 0, 0, 0, +3, 0, +2],
  ['유귀', 12, '오바리온', 71, 91, 14, 10, 9, 13, 12, '-', '-', '약', '내', '-', '약', '내', +3, 0, -3, 0, 0, 0, 0, 0, 0, +1, +1],
  ['지령', 13, '츠치구모', 101, 83, 14, 16, 12, 9, 10, '-', '-', '약', '내', '-', '-', '-', +1, 0, 0, +2, 0, 0, 0, 0, 0, -2, +1],
  ['흉조', 14, '젠', 73, 97, 15, 11, 9, 14, 16, '-', '약', '-', '-', '-', '-', '내', +2, -3, 0, +1, 0, 0, 0, 0, +2, 0, 0],
  ['요수', 14, '바이콘', 88, 76, 18, 14, 8, 13, 11, '-', '-', '-', '약', '-', '약', '무', +2, 0, 0, -3, 0, -2, +2, 0, 0, -1, 0],
  ['여신', 15, '포르투나', 86, 114, 8, 10, 21, 14, 18, '-', '-', '-', '약', '무', '-', '약', -1, 0, 0, -3, +3, +1, -3, 0, 0, +2, +1],
  ['정령', 15, '아쿠안즈', 72, 109, 8, 11, 20, 13, 15, '-', '약', '내', '-', '-', '-', '-', 0, -4, +3, 0, 0, 0, 0, 0, +1, 0, 0],
  ['요마', 16, '아프사라스', 76, 118, 9, 11, 19, 17, 15, '-', '약', '내', '-', '-', '-', '-', 0, -3, +2, 0, 0, 0, 0, 0, 0, +1, +1],
  ['야마', 16, '모코이', 88, 90, 15, 15, 12, 11, 16, '-', '-', '-', '내', '약', '-', '-', 0, 0, 0, +2, -3, 0, 0, 0, +2, 0, -1],
  ['지령', 17, '스다마', 83, 98, 12, 14, 16, 16, 14, '-', '약', '약', '-', '무', '-', '-', 0, -3, -2, 0, +3, 0, 0, 0, +2, 0, 0],
  ['귀녀', 17, '라난시', 82, 115, 9, 14, 20, 13, 15, '-', '-', '-', '-', '약', '약', '무', -1, 0, 0, 0, -3, -2, +3, 0, +3, +2, 0],
  ['요귀', 17, '잇폰다타라', 120, 79, 17, 20, 12, 9, 15, '-', '내', '-', '-', '-', '약', '-', +2, 0, 0, 0, 0, -3, 0, 0, -1, 0, +2],
  ['사룡', 17, '아이트바라스', 84, 112, 12, 12, 16, 16, 17, '-', '무', '약', '-', '-', '-', '-', 0, +3, -3, 0, 0, 0, 0, 0, +1, 0, +1],
  ['천사', 18, '아크엔젤', 102, 114, 15, 14, 16, 18, 16, '-', '-', '-', '약', '-', '무', '약', +1, +1, 0, 0, 0, +3, -5, 0, 0, 0, 0],
  ['정령', 18, '플레이미즈', 83, 119, 9, 12, 22, 15, 17, '-', '내', '약', '-', '-', '-', '-', 0, +3, -4, 0, 0, 0, 0, 0, +1, 0, 0],
  ['요정', 18, '하이픽시', 93, 129, 9, 12, 23, 20, 16, '-', '-', '약', '-', '내', '-', '-', 0, 0, -4, +1, +1, 0, 0, 0, 0, +1, +1],
  ['타천사', 18, '안드라스', 92, 108, 13, 13, 12, 20, 19, '-', '-', '무', '약', '-', '약', '-', 0, 0, 0, 0, +2, -2, 0, 0, +1, 0, +2],
  ['성수', 19, '시이사', 91, 117, 15, 14, 15, 19, 16, '-', '약', '-', '내', '내', '-', '-', +1, -3, 0, +3, 0, 0, 0, 0, 0, 0, +2],
  ['쿠니츠카미', 19, '타케미나카타', 107, 98, 18, 18, 12, 16, 15, '-', '약', '-', '내', '-', '-', '-', +2, -3, 0, +2, 0, 0, 0, 0, -1, 0, 0],
  ['외도', 19, '레기온', 100, 93, 15, 18, 16, 14, 15, '-', '-', '-', '약', '-', '약', '무', 0, 0, 0, 0, 0, -3, +2, 0, +2, -1, 0],
  ['요정', 20, '잭 오 랜턴', 90, 135, 11, 12, 23, 19, 18, '-', '무', '약', '-', '-', '-', '-', 0, +5, -5, 0, 0, -1, 0, 0, 0, 0, +1],
  ['사귀', 20, '락샤사', 114, 90, 25, 19, 10, 16, 14, '-', '-', '약', '-', '-', '내', '내', +2, 0, 0, 0, 0, 0, 0, 0, 0, -1, +1],
  ['신수', 21, '마카미', 109, 119, 13, 16, 17, 21, 24, '-', '-', '-', '-', '-', '내', '약', 0, 0, 0, 0, 0, +1, 0, -2, -2, +3, +2],
  ['지령', 21, '카야노히메', 94, 143, 10, 12, 25, 18, 21, '-', '약', '내', '-', '-', '-', '-', 0, -4, +2, 0, 0, 0, 0, 0, -2, +3, +2],
  ['여신', 22, '아메노우즈메', 99, 139, 11, 14, 26, 19, 20, '-', '-', '-', '무', '약', '-', '-', -3, 0, 0, +2, -3, +2, 0, 0, 0, +1, +2],
  ['영조', 22, '봉황', 128, 116, 16, 16, 20, 20, 17, '-', '무', '-', '-', '내', '-', '약', 0, +4, 0, 0, +2, 0, -4, 0, 0, +3, 0],
  ['야마', 22, '인큐버스', 118, 110, 17, 15, 17, 20, 18, '-', '-', '-', '약', '내', '-', '-', 0, 0, 0, -4, +1, 0, 0, 0, +5, 0, -2],
  ['용신', 23, '현무', 153, 88, 23, 28, 15, 8, 16, '-', '약', '무', '-', '-', '-', '-', +2, -6, +5, 0, 0, 0, 0, 0, 0, 0, +2],
  ['요귀', 23, '오니', 151, 93, 21, 24, 12, 12, 16, '내', '-', '-', '약', '-', '약', '-', +3, 0, 0, -2, 0, 0, 0, 0, 0, -1, 0],
  ['요마', 24, '콥파텐구', 116, 129, 13, 16, 18, 27, 20, '-', '-', '-', '약', '내', '-', '-', 0, 0, 0, -3, +3, 0, 0, 0, 0, 0, +1],
  ['마수', 24, '이누가미', 114, 134, 16, 17, 15, 25, 21, '-', '무', '약', '-', '-', '약', '내', 0, +3, -4, 0, 0, 0, 0, 0, +1, +1, 0],
  ['마인', 24, '마타도르 (DLC)', 136, 154, 23, 14, 17, 28, 22, '-', '-', '-', '약', '무', '내', '내', +4, 0, 0, -5, +3, 0, 0, 0, 0, 0, +1],
  ['요수', 24, '벅스', 126, 121, 23, 19, 19, 14, 20, '-', '약', '-', '-', '-', '-', '무', 0, -2, 0, 0, 0, 0, +5, 0, 0, -4, +2],
  ['지모신', 24, '키쿠리히메', 105, 165, 10, 15, 30, 20, 20, '-', '-', '-', '약', '무', '내', '-', -2, 0, 0, -5, +2, 0, 0, 0, 0, +3, +2],
  ['타천사', 24, '베리스', 144, 101, 26, 24, 13, 18, 14, '-', '내', '약', '-', '-', '-', '내', +2, +2, -3, 0, 0, 0, 0, 0, 0, -1, 0],
  ['요정', 25, '잭 프로스트', 119, 153, 14, 15, 29, 21, 21, '-', '약', '흡', '-', '-', '-', '-', 0, -5, +4, 0, 0, +2, 0, 0, 0, 0, 0],
  ['귀녀', 25, '마나낭갈', 109, 156, 15, 14, 29, 21, 21, '-', '-', '-', '-', '-', '약', '무', 0, 0, 0, 0, +2, -2, +3, 0, +2, 0, 0],
  ['유귀', 25, '폴터가이스트', 115, 137, 17, 17, 16, 20, 23, '-', '-', '-', '무', '약', '약', '-', 0, 0, 0, +2, -1, -2, 0, 0, 0, 0, +2],
  ['지령', 26, '코로포클', 118, 148, 13, 15, 27, 21, 25, '-', '-', '무', '-', '약', '내', '약', 0, 0, +4, 0, -3, 0, -4, 0, 0, +1, +3],
  ['성수', 27, '치른누프', 124, 185, 16, 18, 25, 25, 24, '-', '내', '내', '-', '-', '내', '약', 0, +3, +1, 0, 0, +2, -5, -2, 0, 0, +4],
  ['귀신', 27, '아티스', 149, 129, 28, 18, 24, 21, 15, '-', '무', '-', '-', '-', '-', '약', +3, +2, 0, 0, 0, 0, -4, 0, 0, +2, 0],
  ['용왕', 27, '나가', 115, 109, 28, 25, 14, 20, 15, '-', '약', '-', '무', '약', '-', '-', +2, -3, 0, +1, 0, 0, 0, 0, 0, 0, +1],
  ['천사', 28, '프린시펄리티', 130, 175, 13, 16, 34, 22, 22, '-', '-', '-', '-', '-', '무', '약', 0, 0, 0, 0, 0, +4, -5, 0, 0, +2, +1],
  ['여신', 29, '아나히타', 141, 199, 14, 24, 32, 22, 22, '-', '약', '흡', '약', '-', '무', '-', 0, -2, +4, -6, 0, +2, 0, 0, 0, +2, +1],
  ['요수', 29, '모스맨', 139, 153, 17, 19, 15, 30, 27, '-', '-', '-', '무', '약', '-', '-', 0, 0, 0, +1, -3, 0, 0, 0, +4, 0, 0],
  ['요귀', 29, '시키오우지', 135, 159, 16, 18, 29, 23, 23, '내', '약', '-', '-', '약', '내', '내', 0, -5, 0, 0, 0, +2, +2, 0, +1, 0, 0],
  ['요정', 30, '켈피', 136, 153, 20, 21, 19, 29, 24, '-', '-', '내', '-', '약', '-', '-', 0, 0, 0, 0, -3, 0, 0, 0, 0, +3, +1],
  ['마인', 30, '대승정 (DLC)', 144, 183, 15, 21, 36, 19, 30, '-', '약', '-', '-', '-', '무', '무', 0, -5, 0, 0, 0, +4, +4, 0, +3, +1, 0],
  ['사귀', 30, '로아', 129, 163, 15, 16, 31, 24, 26, '-', '-', '-', '-', '-', '약', '무', 0, 0, 0, 0, 0, -3, +3, 0, +4, 0, 0],
  ['귀녀', 30, '야크시니', 172, 117, 31, 25, 14, 24, 17, '-', '-', '-', '약', '무', '-', '-', +2, 0, 0, -3, +2, 0, 0, 0, 0, 0, 0],
  ['지령', 31, '화백', 133, 168, 12, 21, 31, 29, 29, '-', '무', '약', '-', '-', '-', '-', 0, +2, -3, 0, 0, 0, 0, 0, 0, +1, +1],
  ['타천사', 31, '포르네우스', 141, 170, 19, 20, 26, 24, 25, '-', '-', '흡', '약', '-', '약', '무', 0, 0, +4, -5, 0, -3, +2, 0, +2, 0, +2],
  ['사룡', 31, '바실리스크', 190, 114, 26, 31, 15, 21, 24, '-', '내', '내', '약', '-', '-', '-', 0, 0, +2, -3, 0, 0, 0, 0, +5, 0, 0],
  ['유귀', 31, '피샤차', 144, 155, 26, 20, 12, 30, 26, '-', '약', '-', '-', '-', '약', '무', +2, -3, 0, 0, 0, 0, +2, 0, +1, -2, 0],
  ['영조', 32, '자타유', 165, 158, 22, 24, 18, 27, 26, '-', '-', '-', '약', '흡', '-', '약', 0, 0, 0, 0, +4, 0, -3, 0, 0, 0, +3],
  ['야마', 32, '리림', 138, 172, 13, 18, 34, 27, 26, '-', '-', '약', '무', '-', '-', '-', 0, 0, -3, +3, 0, 0, 0, 0, +2, 0, 0],
  ['악신', 33, '바포멧', 142, 180, 16, 19, 34, 26, 26, '-', '-', '-', '-', '-', '약', '무', 0, +1, 0, 0, 0, -3, +3, 0, 0, 0, 0],
  ['마신', 33, '토트', 144, 241, 18, 22, 36, 21, 27, '-', '무', '-', '-', '-', '-', '약', 0, 0, 0, 0, 0, +2, -3, +1, 0, 0, +3],
  ['마왕', 33, '킹 프로스트', 172, 175, 27, 21, 34, 21, 26, '-', '약', '흡', '-', '-', '무', '약', 0, -6, +5, 0, 0, 0, 0, 0, +1, 0, +1],
  ['외도', 33, '블랙 우즈', 217, 119, 23, 35, 21, 15, 23, '내', '약', '-', '-', '-', '약', '-', +2, -2, 0, 0, 0, -2, 0, +2, +6, -3, 0],
  ['마수', 34, '네코마타', 158, 166, 23, 20, 18, 33, 29, '-', '내', '약', '약', '무', '-', '-', +3, 0, -5, 0, +2, 0, 0, 0, +2, 0, 0],
  ['용신', 34, '케찰코아틀', 171, 144, 24, 23, 30, 24, 24, '-', '무', '-', '약', '-', '-', '-', 0, +4, 0, -6, +4, 0, 0, 0, 0, 0, +2],
  ['여신', 35, '파르바티', 151, 204, 17, 20, 39, 28, 29, '-', '약', '내', '-', '-', '내', '-', 0, -3, 0, 0, 0, +2, 0, 0, 0, +4, +3],
  ['요정', 35, '세탄타', 193, 163, 35, 25, 26, 27, 20, '-', '-', '-', '약', '무', '-', '약', +3, 0, 0, -3, +1, 0, 0, 0, 0, 0, +2],
  ['지모신', 35, '하리티', 166, 196, 25, 20, 32, 25, 26, '-', '-', '-', '-', '약', '-', '무', 0, 0, 0, 0, -2, 0, +2, 0, +2, +3, 0],
  ['마인', 36, '헬즈 엔젤 (DLC)', 194, 173, 26, 23, 27, 34, 28, '-', '무', '약', '-', '무', '내', '내', +3, +4, -5, 0, +4, 0, 0, 0, +2, 0, 0],
  ['귀신', 36, '중장천', 213, 150, 29, 27, 24, 22, 26, '-', '-', '-', '-', '약', '무', '-', +4, 0, 0, 0, -4, +3, 0, 0, 0, 0, +1],
  ['귀녀', 36, '라미아', 156, 188, 21, 24, 27, 28, 29, '-', '-', '약', '무', '-', '-', '-', 0, 0, -3, +3, 0, -2, +2, 0, +3, -1, 0],
  ['여신', 37, '아르테미스 (DLC)', 211, 189, 36, 24, 31, 28, 23, '-', '약', '무', '무', '-', '내', '내', +5, -4, +3, +3, 0, 0, 0, 0, +1, 0, +2],
  ['쿠니츠카미', 37, '스쿠나히코나', 206, 169, 28, 26, 30, 26, 26, '-', '-', '무', '약', '-', '내', '내', +2, 0, +4, -5, +4, 0, 0, 0, 0, 0, +3],
  ['타천사', 37, '엘리고르', 214, 157, 38, 32, 19, 24, 20, '-', '무', '-', '약', '-', '-', '내', +3, +2, 0, -3, 0, 0, 0, 0, 0, 0, +1],
  ['영조', 38, '선더버드', 192, 172, 27, 18, 32, 36, 21, '-', '-', '-', '무', '약', '-', '-', 0, 0, 0, +5, -3, 0, 0, 0, 0, 0, +2],
  ['흉조', 38, '모쇼보', 175, 202, 16, 20, 34, 36, 29, '-', '약', '-', '-', '무', '-', '-', 0, -3, 0, 0, +3, 0, 0, 0, 0, +1, +2],
  ['지령', 38, '나르키소스', 175, 187, 22, 16, 34, 35, 31, '-', '약', '-', '-', '무', '-', '-', -2, -3, 0, 0, +4, 0, 0, 0, +3, 0, 0],
  ['야마', 38, '서큐버스', 165, 197, 17, 20, 38, 31, 29, '-', '내', '무', '-', '-', '약', '-', 0, 0, +4, 0, 0, -5, 0, 0, +4, 0, +1],
  ['천사', 39, '파워', 239, 153, 31, 36, 27, 21, 25, '-', '-', '-', '내', '약', '무', '약', +3, 0, 0, 0, 0, +3, -6, 0, 0, +1, 0],
  ['환마', 39, '쿠라마텐구', 179, 186, 28, 25, 21, 36, 31, '-', '-', '-', '약', '무', '-', '-', +1, 0, 0, -5, +4, +2, 0, 0, 0, 0, 0],
  ['요마', 40, '발키리', 222, 148, 42, 32, 18, 26, 24, '-', '-', '-', '-', '약', '무', '-', +3, 0, 0, +2, -4, 0, 0, 0, 0, 0, +2],
  ['성수', 40, '하야타로 (Cha)', 218, 209, 35, 33, 27, 37, 32, '내', '-', '-', '무', '약', '내', '약', +5, 0, 0, +4, -5, +3, -3, 0, 0, +3, +3],
  ['마인', 40, '앨리스', 189, 255, 7, 25, 46, 30, 34, '-', '-', '-', '-', '-', '약', '흡', 0, 0, 0, 0, 0, -5, +5, 0, +3, -2, 0],
  ['쿠니츠카미', 40, '오오야마츠미 (SQ)', 261, 140, 36, 38, 23, 18, 26, '-', '약', '내', '내', '-', '-', '무', +2, -6, +5, 0, 0, 0, 0, 0, 0, +1, +4],
  ['용왕', 40, '나가라쟈', 241, 140, 33, 36, 31, 19, 22, '-', '약', '내', '흡', '약', '-', '-', +3, -3, +1, +3, -4, 0, 0, 0, 0, 0, -1],
  ['신수', 41, '아누비스', 184, 240, 15, 22, 45, 31, 34, '-', '-', '-', '-', '약', '무', '내', -3, 0, 0, 0, -3, +4, +4, 0, 0, +1, 0],
  ['요정', 41, '실키', 189, 210, 19, 23, 40, 29, 34, '-', '약', '무', '-', '-', '-', '-', -3, 0, +3, 0, 0, 0, 0, 0, 0, +2, +1],
  ['유귀', 41, '쿠반다', 208, 168, 32, 26, 30, 29, 27, '-', '-', '-', '약', '무', '-', '내', +3, 0, 0, -5, 0, 0, +2, 0, +2, 0, 0],
  ['여신', 42, '이둔 (SQ)', 204, 245, 19, 24, 51, 33, 35, '-', '-', '-', '약', '내', '무', '-', 0, 0, 0, 0, +2, +2, -4, 0, 0, +4, +2],
  ['악신', 42, '미샤구지사마', 235, 159, 39, 31, 21, 32, 25, '-', '-', '-', '무', '약', '내', '무', 0, 0, 0, +3, -6, 0, +2, 0, 0, 0, +1],
  ['마신', 42, '호루스', 194, 203, 25, 27, 28, 38, 35, '-', '내', '-', '내', '약' , '반', '약', 0, 0, 0, 0, 0, +3, -4, +2, 0, +2, +2],
  ['마수', 42, '오르트로스', 255, 155, 41, 32, 21, 34, 22, '-', '무', '약', '-', '-', '-', '내', +3, +3, -5, 0, 0, 0, 0, 0, 0, -2, +1],
  ['영조', 43, '주작', 188, 219, 23, 24, 41, 36, 28, '-', '무', '약', '-', '-', '-', '-', 0, +5, -6, 0, 0, 0, 0, 0, +1, 0, +1],
  ['성수', 43, '백호', 199, 222, 30, 25, 23, 42, 35, '-', '-', '-', '무', '약', '-', '-', +2, 0, 0, +5, -6, 0, 0, 0, 0, 0, +1],
  ['마인', 43, '화이트 라이더 (DLC)', 239, 195, 25, 31, 40, 29, 34, '-' , '반', '-', '약', '-', '내', '내', 0, +5, 0, -5, 0, +7, 0, 0, 0, 0, +3],
  ['사귀', 43, '마카브르', 240, 158, 42, 30, 18, 27, 32, '-', '-', '-', '-', '-', '약', '무', +1, 0, 0, 0, 0, -3, +1, 0, +5, 0, 0],
  ['파괴신', 44, '디오니소스', 225, 182, 33, 30, 31, 32, 30, '-', '무', '약', '내', '-', '-', '-', +2, +2, -4, 0, 0, 0, 0, 0, +3, 0, 0],
  ['귀신', 44, '광목천', 249, 194, 33, 33, 31, 29, 30, '-', '-', '-', '약', '무', '내', '-', +4, 0, 0, -4, +4, 0, 0, 0, 0, 0, +3],
  ['타천사', 44, '오세', 264, 169, 45, 35, 21, 33, 26, '-', '약', '무', '-', '-', '-', '무', +3, 0, 0, 0, 0, 0, 0, 0, -3, 0, +3],
  ['야마', 44, '사악한 프로스트 (SQ)', 255, 204, 38, 37, 33, 26, 28, '-', '내', '무', '-', '-', '약' , '반', 0, 0, +3, 0, 0, -4, +4, 0, 0, 0, 0],
  ['마왕', 44, '벨페고르', 225, 190, 31, 39, 34, 20, 28, '내', '약', '무', '내', '-', '약', '무', 0, 0, +4, 0, 0, 0, +4, 0, 0, -3, +1],
  ['군신', 45, '요시츠네', 253, 200, 47, 25, 22, 46, 31, '내', '-', '-', '-', '-', '-', '약', +5, 0, 0, 0, 0, 0, -4, 0, 0, 0, +1],
  ['용신', 45, '청룡', 231, 183, 31, 29, 33, 36, 31, '-', '-', '내', '약', '무', '-', '-', 0, 0, +2, -6, +5, 0, 0, 0, 0, 0, +1],
  ['야마', 45, '케완', 209, 216, 24, 27, 30, 41, 38, '-', '-', '-', '-', '-', '약', '무', 0, 0, 0, 0, 0, -3, +3, 0, +1, 0, +2],
  ['환마', 46, '하누만', 267, 169, 44, 36, 22, 32, 28, '-', '-', '-', '약' , '반', '-', '-', +3, 0, 0, -5, +2, 0, 0, 0, 0, 0, +1],
  ['지모신', 46, '이시스', 204, 251, 21, 25, 47, 36, 36, '-', '내', '-', '무', '-', '-', '약', -4, 0, 0, +4, 0, 0, -3, 0, 0, +3, +1],
  ['귀녀', 46, '다키니', 226, 169, 44, 31, 20, 32, 33, '내', '내', '약', '-', '-', '약', '-', +2, +3, -4, 0, 0, 0, 0, 0, +1, 0, -2],
  ['여신', 47, '사라스바티', 208, 254, 21, 25, 48, 37, 36, '-', '약', '무', '-', '-', '-', '약', 0, -4, +3, 0, 0, 0, 0, 0, +2, 0, +2],
  ['요정', 47, '오베론', 242, 211, 32, 29, 33, 35, 32, '-', '-', '-', '약', '무', '-', '-', 0, 0, 0, -4, +3, 0, 0, 0, 0, +2, +2],
  ['마인', 47, '레드 라이더 (DLC)', 272, 201, 39, 29, 37, 31, 32, '-', '-', '약' , '반', '흡', '내', '내', +6, 0, -5, +4, +4, 0, 0, 0, 0, 0, +2],
  ['악신', 48, '라흐무', 253, 264, 30, 36, 47, 27, 39, '-', '약', '내', '-', '내', '-', '무', +2, -4, +3, 0, +2, 0, +3, +2, +3, 0, 0],
  ['흉조', 48, '안즈', 272, 176, 39, 32, 24, 45, 26, '-', '-', '-', '무', '약', '-', '-', +3, 0, 0, +2, -4, 0, 0, 0, 0, 0, +1],
  ['마수', 49, '오로바스', 213, 264, 35, 32, 41, 26, 35, '-', '무', '약', '-', '-', '-', '내', +1, +3, -4, 0, 0, -2, +2, 0, 0, 0, +1],
  ['요수', 49, '누에', 289, 180, 47, 38, 30, 25, 29, '-', '-', '-', '무', '약', '-', '-', +1, 0, 0, +4, -3, 0, 0, 0, 0, 0, -2],
  ['쿠니츠카미', 49, '쿠시나다히메', 218, 259, 22, 27, 50, 36, 37, '-', '-', '-', '-', '-', '무', '약', 0, 0, 0, 0, 0, +3, -3, 0, 0, +4, +1],
  ['요귀', 49, '킨키', 323, 170, 43, 52, 27, 21, 25, '-', '-', '-', '무', '약', '-', '-', +4, 0, 0, +2, -4, 0, 0, 0, 0, -2, 0],
  ['천사', 50, '도미니온', 223, 253, 23, 28, 48, 35, 40, '-', '-', '-', '무', '약', '무', '약', 0, 0, 0, +3, 0, +3, -5, 0, 0, +1, +2],
  ['타천사', 50, '플라로우스', 285, 182, 50, 36, 30, 36, 20, '-', '무', '약', '-', '-', '-', '내', +2, +4, -6, 0, 0, 0, +2, 0, 0, 0, 0],
  ['용왕', 50, '유룽', 255, 212, 34, 35, 51, 23, 27, '-', '약', '-', '무', '-', '-', '-', 0, 0, +3, +2, 0, 0, 0, 0, -5, +1, +1],
  ['귀신', 51, '지국천', 312, 212, 40, 42, 38, 24, 29, '-', '약', '무', '-', '-', '내', '-', +4, -5, +3, 0, 0, 0, 0, 0, 0, 0, +3],
  ['마왕', 51, '몰록 (SQ)', 297, 212, 42, 36, 42, 28, 25, '-', '무', '약', '내', '-', '-', '내', +2, +4, -5, 0, 0, 0, +2, 0, 0, 0, 0],
  ['악신', 52, '파즈스', 273, 241, 31, 34, 41, 35, 40, '-', '-', '약', '-', '내', '-', '무', 0, 0, -5, 0, +3, 0, +1, 0, +4, 0, 0],
  ['환마', 52, '쿠훌린', 293, 201, 41, 37, 33, 40, 25, '내', '-', '-', '약', '무', '-', '-', +4, 0, 0, -2, +4, 0, 0, 0, 0, 0, +2],
  ['마인', 52, '블랙 라이더 (DLC)', 273, 256, 30, 37, 48, 49, 35, '-', '-' , '반', '-', '약', '내', '내', 0, 0, +7, 0, -5, 0, +2, +5, 0, 0, +1],
  ['파괴신', 52, '체르노보그', 248, 251, 43, 27, 45, 29, 35, '-', '-', '-', '-', '-', '약', '무', 0, 0, 0, 0, 0, -2, +3, 0, +4, -3, 0],
  ['귀녀', 52, '클로토', 278, 265, 20, 42, 33, 51, 30, '-', '무', '약', '-', '-', '-', '-', 0, +1, -5, 0, 0, 0, 0, 0, +1, +3, +2],
  ['사룡', 53, '히드라', 316, 194, 54, 43, 24, 33, 30, '-', '무', '약', '-', '-', '-', '-', +3, +3, -4, 0, 0, 0, 0, 0, +2, -1, 0],
  ['영조', 54, '야타가라스', 258, 296, 31, 33, 42, 44, 39, '-', '-', '-', '-', '내', '무', '약', 0, 0, 0, 0, +2, +4, -7, 0, 0, +2, +2],
  ['마신', 54, '아타바크', 328, 201, 48, 42, 41, 26, 25, '-', '-', '약', '-', '-', '무', '무', +4, 0, -5, 0, 0, +2, +2, 0, 0, 0, 0],
  ['마수', 54, '루가루', 322, 198, 51, 39, 24, 49, 21, '-', '내', '약', '무', '-', '약', '-', +3, +2, 0, +2, 0, -4, 0, 0, 0, 0, 0],
  ['여신', 55, '스카아하', 307, 238, 44, 32, 37, 40, 32, '-', '-', '-', '약', '무', '내', '-', +1, 0, 0, -5, +3, 0, 0, 0, +2, +2, 0],
  ['성수', 55, '키마이라', 320, 216, 47, 37, 41, 34, 27, '-', '내', '-', '무', '약', '-', '-', +3, +2, 0, +3, -4, 0, 0, 0, 0, -2, 0],
  ['사귀', 55, '헤카톤케일', 365, 190, 52, 52, 21, 29, 32, '-', '-', '-', '-', '약', '-', '무', +4, 0, 0, 0, -2, 0, 0, 0, +2, -4, +1],
  ['쿠니츠카미', 55, '오오쿠니누시 (SQ)', 320, 236, 47, 47, 26, 40, 28, '-', '-', '약', '-', '-', '내', '내', +2, 0, -5, 0, 0, +2, 0, 0, 0, +4, 0],
  ['타천사', 55, '데카라비아', 276, 269, 31, 33, 48, 33, 41, '-', '-', '-', '-', '-', '약', '무', 0, +2, 0, 0, 0, -4, +3, +2, +1, 0, 0],
  ['지모신', 56, '키벨레', 298, 240, 49, 29, 44, 22, 48, '-', '내', '-', '약', '-', '무', '-', +4, +2, 0, -6, 0, 0, 0, 0, 0, +2, 0],
  ['요귀', 56, '스이키', 328, 227, 47, 39, 41, 33, 28, '-', '약', '무', '-', '-', '-', '-', +2, -5, +4, 0, 0, 0, 0, 0, 0, 0, +1],
  ['야마', 56, '퀸메이브', 266, 289, 25, 30, 52, 33, 49, '-', '-', '-', '약', '무', '-', '-', 0, +3, 0, -2, +2, 0, 0, 0, +3, 0, 0],
  ['마왕', 56, '로키', 276, 284, 31, 33, 47, 40, 42, '-', '-', '무', '-', '내', '약', '내', 0, +3, +3, +3, +3, -3, 0, 0, 0, 0, 0],
  ['군신', 57, '가네샤', 364, 217, 50, 54, 31, 23, 35, '내', '-', '-', '약', '무', '-', '약', +3, 0, 0, -6, +1, 0, 0, 0, 0, 0, +4],
  ['요정', 57, '티타니아', 262, 395, 25, 36, 54, 35, 42, '-', '약', '-', '-', '-', '무', '내', -4, 0, 0, +3, 0, 0, 0, 0, 0, +3, +1],
  ['마인', 57, '페일 라이더 (DLC)', 305, 261, 51, 35, 40, 37, 53, '-', '약', '무', '-', '-', '내', '내', +4, -5, +3, 0, 0, 0, 0, 0, +7, 0, +2],
  ['귀신', 58, '비사문천', 344, 262, 49, 41, 45, 28, 33, '-', '무', '약', '-', '-', '무', '-', +5, +5, -4, 0, 0, +3, 0, 0, 0, 0, 0],
  ['귀녀', 58, '라케시스', 334, 256, 24, 44, 39, 31, 56, '-', '-', '-', '-', '약', '-', '-', 0, 0, 0, 0, -5, 0, 0, 0, +5, 0, +4],
  ['용신', 59, '아난타', 384, 206, 55, 56, 24, 29, 34, '-', '-', '무', '무', '약', '무', '약', 0, 0, +4, +2, -4, +2, 0, 0, 0, 0, 0],
  ['대천사', 60, '멜키세덱', 341, 281, 44, 41, 30, 52, 38, '-', '-', '-', '-', '약', '흡', '무', +2, 0, 0, 0, -6, +5, 0, 0, 0, 0, +2],
  ['신수', 60, '바롱', 346, 233, 46, 46, 33, 39, 40, '-', '-', '-', '무', '약', '무', '약', +3, 0, 0, +4, -3, 0, -3, 0, 0, 0, +1],
  ['사룡', 60, '파프니르', 370, 220, 56, 50, 23, 29, 41, '내', '-', '약', '약', '-', '-', '-', +4, 0, -3, -3, 0, 0, 0, 0, +3, 0, 0],
  ['귀녀', 61, '클레오파트라 (DLC)', 404, 412, 26, 42, 69, 44, 51, '-', '내', '내', '내', '내', '흡', '약', 0, 0, +5, 0, +5, +6, -6, 0, +3, +5, +5],
  ['마신', 62, '콘스 (SQ)', 358, 293, 49, 42, 53, 30, 44, '-', '내', '약', '-', '-', '무', '-', +3, +4, -5, 0, 0, +5, 0, 0, 0, 0, +3],
  ['지모신', 62, '이슈타르', 310, 317, 20, 33, 61, 41, 53, '-', '-', '-', '무', '약', '무', '약', 0, 0, 0, +2, 0, +3, -3, 0, 0, +2, +2],
  ['쿠니츠카미', 62, '아라하바키', 290, 317, 27, 37, 58, 34, 52, '무', '약', '약', '약', '약', '내', '내', 0, -4, -2, -3, -3, 0, 0, +3, 0, 0, +3],
  ['마왕', 62, '수르트', 388, 233, 56, 49, 46, 29, 36, '-', '흡', '약', '-', '-', '-', '-', +4, +6, -6, 0, 0, 0, 0, 0, 0, 0, 0],
  ['군신', 63, '지크프리트', 398, 233, 59, 54, 27, 41, 29, '흡', '-', '-', '-', '약', '약', '약', +6, 0, 0, 0, 0, -5, -5, -5, 0, -4, +1],
  ['파괴신', 63, '모트', 306, 338, 28, 58, 59, 24, 46, '-', '내', '-', '약', '-', '-', '흡', 0, 0, 0, -6, +4, 0, +4, +4, 0, 0, 0],
  ['요귀', 63, '후우키', 346, 282, 43, 37, 39, 51, 40, '-', '-', '-', '약', '무', '-', '-', +2, 0, 0, -5, +5, 0, 0, 0, 0, -3, +1],
  ['영조', 64, '가루다', 319, 302, 46, 33, 32, 56, 51, '-', '-', '-', '약', '흡', '내', '-', +2, 0, 0, -4, +5, 0, 0, 0, 0, 0, +1],
  ['천사', 64, '트론', 327, 313, 28, 44, 54, 41, 47, '-', '무', '약', '-', '-', '무', '약', 0, +4, -3, 0, 0, +4, -6, 0, 0, +1, 0],
  ['마수', 64, '케르베로스', 450, 223, 53, 59, 28, 43, 30, '-' , '반', '약', '-', '-', '-', '-', +3, +4, -5, 0, 0, 0, 0, 0, 0, 0, 0],
  ['마인', 64, '마더 할롯 (DLC)', 352, 362, 42, 45, 60, 36, 40 , '반', '내', '-', '흡', '약', '내', '내', 0, +4, 0, +4, -6, 0, 0, +6, +3, 0, +3],
  ['귀녀', 64, '아트로포스', 312, 328, 28, 44, 59, 41, 42, '-', '약', '내', '-', '-', '무', '-', 0, -4, +4, 0, 0, +3, 0, 0, +1, 0, 0],
  ['마신', 65, '미트라', 339, 302, 43, 39, 53, 37, 43, '-', '-', '약', '-', '-', '무', '내', 0, 0, -5, 0, 0, +3, +3, +2, 0, +3, 0],
  ['악신', 66, '기리메칼라', 381, 245, 61, 40, 46, 35, 38 , '반', '-', '-', '약', '약', '약', '내', +4, 0, 0, 0, 0, 0, 0, 0, +1, -3, +2],
  ['귀신', 66, '토르', 399, 272, 58, 56, 43, 29, 36, '-', '내', '-', '흡', '약', '내', '-', +4, 0, 0, +4, -5, 0, 0, 0, 0, 0, 0],
  ['여신', 67, '노른', 358, 321, 39, 40, 59, 34, 49, '-', '-', '-', '약', '-', '내', '무', 0, 0, 0, -4, 0, +1, 0, 0, 0, +4, +3],
  ['지모신', 67, '스카디', 320, 345, 22, 36, 62, 54, 49, '-', '약', '내', '-', '-', '-', '무', 0, -5, +4, 0, 0, 0, +3, 0, +1, 0, 0],
  ['타천사', 67, '네비로스', 300, 365, 27, 30, 67, 42, 56, '-', '-', '-', '-', '약', '약' , '반', 0, 0, 0, 0, -3, -3, +4, +2, 0, 0, 0],
  ['마왕', 67, '마라', 449, 249, 57, 61, 31, 25, 53, '-', '-', '약', '흡', '-', '내', '내', +5, 0, -6, 0, 0, 0, 0, 0, +3, 0, 0],
  ['사룡', 67, '세트', 409, 284, 62, 43, 51, 40, 34, '-', '-', '약', '무', '-', '내', '내', +3, 0, -6, +3, +3, 0, 0, 0, +2, -5, 0],
  ['야마', 68, '릴리스', 326, 363, 22, 36, 63, 48, 57, '-', '내', '내', '내', '약', '-', '내', 0, 0, 0, +4, -5, 0, 0, +2, +3, 0, 0],
  ['대천사', 69, '카마엘 (SQ)', 407, 286, 50, 58, 45, 39, 35, '-', '내', '약', '-', '-', '무', '-', +3, 0, -4, 0, 0, +2, 0, 0, 0, +2, 0],
  ['군신', 69, '후츠누시', 424, 291, 63, 46, 32, 48, 39, '-', '-', '-', '-', '-', '무', '약', +6, 0, 0, 0, 0, 0, 0, 0, 0, -3, +4],
  ['여신', 70, '락슈미', 363, 373, 30, 41, 65, 44, 51, '-', '-', '-', '약', '내', '무', '-', -4, 0, 0, -3, +3, +3, 0, 0, 0, +3, +3],
  ['귀녀', 70, '랑다', 334, 348, 46, 36, 59, 39, 51 , '반', '약', '-', '약', '-', '약', '-', +3, 0, 0, -5, +3, -3, 0, 0, 0, +1, 0],
  ['환마', 71, '핀 막 쿨 (SQ)', 437, 325, 58, 47, 52, 52, 37, '-', '무', '-', '약', '-', '무', '-', +5, +4, +3, -6, 0, 0, 0, 0, 0, 0, 0],
  ['타천사', 71, '아드라멜렉', 402, 310, 57, 39, 62, 50, 32, '-', '내', '약', '-', '-', '-', '무', +1, +6, -5, 0, 0, 0, +2, 0, 0, 0, 0],
  ['파괴신', 72, '자오우곤겐 (SQ)', 444, 325, 61, 50, 57, 35, 37, '-', '내', '-', '약', '-', '내', '내', +5, +4, 0, -7, 0, 0, 0, +3, 0, 0, 0],
  ['용왕', 72, '야마타노오로치', 468, 255, 66, 72, 26, 33, 40, '-', '무', '무', '약', '-', '-', '-', +4, +3, 0, -2, 0, 0, 0, 0, -5, 0, 0],
  ['마왕', 72, '아바돈', 479, 300, 52, 60, 42, 35, 47, '-', '무', '-', '약', '-', '-', '내', +4, +2, 0, -5, 0, 0, +1, 0, +3, 0, 0],
  ['마인', 73, '트럼페터 (DLC)', 398, 402, 32, 30, 77, 55, 57, '-', '내', '내', '내', '내', '무', '무', -6, +3, +3, +3, +3, 0, 0, +5, +4, 0, 0],
  ['사룡', 74, '바스키', 424, 335, 43, 43, 53, 47, 63, '-', '약' , '반', '-', '-', '-', '내', 0, -5, +4, 0, 0, 0, +1, 0, +7, 0, -4],
  ['마왕', 75, '아리오크', 474, 324, 69, 61, 47, 35, 42, '-', '-' , '반', '약', '내', '-', '내', +2, 0, +5, -7, 0, 0, 0, 0, +2, 0, 0],
  ['여신', 76, '데메테르 (SQ)', 377, 450, 27, 40, 69, 53, 65, '-', '약', '-', '-', '-', '무', '무', 0, -5, 0, 0, +3, +1, 0, 0, 0, +4, +3],
  ['환마', 76, '아마노자코 (SQ)', 407, 450, 26, 40, 70, 63, 59, '-', '약', '약' , '반', '무', '내', '무', 0, -4, -4, +4, +2, 0, 0, +3, 0, +2, 0],
  ['귀녀', 76, '칼리', 481, 288, 74, 62, 35, 48, 35, '-', '무', '약', '-', '약', '내' , '반', +4, +3, -2, 0, 0, 0, +2, 0, 0, 0, -3],
  ['대천사', 77, '스라오샤', 399, 407, 33, 43, 67, 68, 55, '-', '-', '내', '내', '약', '흡', '-', 0, 0, 0, 0, -5, +5, 0, +2, 0, +3, 0],
  ['마신', 77, '오딘', 477, 345, 65, 58, 57, 48, 32, '-', '-', '-' , '반', '약', '무', '무', +6, 0, 0, +4, -6, 0, 0, 0, 0, 0, +1],
  ['마왕', 77, '미트라스 (SQ', 462, 325, 58, 49, 60, 42, 50, '-', '흡', '약', '-', '-', '무', '-', +1, +5, -4, 0, 0, +3, 0, 0, 0, 0, +1],
  ['마신', 78, '콘스 라 (SQ)', 434, 413, 49, 50, 72, 54, 55, '-', '무', '약', '내', '내', '흡', '-', +3, +7, -5, 0, 0, +5, 0, +3, 0, 0, 0],
  ['용신', 78, '황룡 (SQ)', 455, 365, 56, 57, 58, 58, 56, '-', '내', '내', '내', '내', '무', '약', 0, 0, 0, 0, 0, 0, -5, +5, 0, +2, +2],
  ['요귀', 78, '온교우키', 549, 297, 67, 65, 46, 31, 48, '내', '-', '내', '-', '내', '약', '-', +5, 0, 0, 0, 0, -4, 0, +3, +4, 0, 0],
  ['마왕', 79, '메피스토 (DLC)', 503, 455, 64, 44, 71, 50, 66, '무', '-', '-', '-', '-', '약', '흡', +7, +7, 0, 0, 0, -6, +9, 0, +9, 0, +4],
  ['대천사', 80, '아브디엘 (NG+)', 535, 346, 70, 50, 65, 55, 31, '-', '-', '-', '내', '내' , '반', '약', +2, 0, 0, +2, +2, +5, -5, -4, -2, 0, 0],
  ['지모신', 80, '여와 (NG+)', 438, 455, 63, 52, 70, 44, 50, '-', '약', '-', '내' , '반', '-', '내', +2, -5, 0, 0, +4, 0, 0, 0, 0, +2, 0],
  ['지모신', 81, '알릴라트', 410, 418, 24, 75, 68, 50, 61, '-', '-', '-', '-', '-', '내', '내', -6, 0, 0, 0, 0, 0, 0, +4, 0, +3, +3],
  ['대천사', 82, '우리엘 (SQ)', 516, 371, 66, 59, 64, 57, 45, '-', '무', '약', '내', '-', '무', '-', +2, +5, -5, +2, 0, +3, 0, 0, 0, 0, -4],
  ['마왕', 82, '아몬 (SQ)', 619, 329, 69, 74, 64, 32, 46, '내', '흡', '약', '-', '-', '내', '내', +2, +6, -6, 0, 0, 0, 0, 0, 0, 0, +4],
  ['여신', 83, '마리아 (Law)', 424, 485, 34, 46, 80, 61, 74, '-', '-', '-', '약', '흡', '무', '내', -3, 0, 0, -5, +4, +4, -5, 0, 0, +4, +2],
  ['악신', 83, '마다', 524, 389, 69, 65, 74, 45, 41, '-', '흡', '약', '-', '-', '-', '무', +3, +5, -4, 0, 0, 0, 0, -3, 0, +3, +2],
  ['대천사', 84, '라파엘 (SQ)', 528, 387, 70, 62, 80, 50, 48, '-', '약', '-', '내', '무', '무', '-', 0, -4, 0, 0, +5, +3, 0, 0, +2, +3, -2],
  ['파괴신', 84, '아수라왕 (SQ)', 543, 382, 80, 73, 53, 52, 53, '-' , '반', '약', '-', '-', '무', '내', +3, +5, -4, 0, 0, 0, 0, +3, 0, -4, 0],
  ['대천사', 86, '가브리엘 (SQ)', 534, 437, 56, 65, 73, 64, 67, '-', '내', '무', '약', '-', '무', '-', 0, 0, +5, -4, 0, +3, 0, 0, -7, +3, +1],
  ['마신', 86, '제우스 (SQ)', 520, 448, 73, 56, 62, 82, 54, '-', '-', '-', '무', '약', '무', '무', +4, 0, 0, +6, -6, 0, 0, +2, 0, 0, +1],
  ['마신', 87, '비슈느', 452, 523, 46, 57, 90, 67, 71, '무', '약', '-', '-', '-' , '반', '무', 0, -5, 0, 0, 0, +4, +6, 0, 0, +3, 0],
  ['지모신', 87, '이난나 (Cha)', 467, 508, 57, 68, 96, 59, 68, '약', '무', '무', '무', '무', '-', '약', -6, +5, +5, +5, +5, 0, 0, +3, -6, -4, +2],
  ['마왕', 87, '치우', 577, 378, 81, 73, 71, 45, 53, '-', '약', '무', '약' , '반', '-', '-', +4, -5, +4, -5, +2, 0, 0, 0, 0, 0, 0],
  ['대천사', 88, '산달폰', 536, 458, 71, 74, 83, 63, 53, '무', '-', '-', '무', '약', '무', '내', 0, 0, 0, +3, -4, +5, 0, +3, -5, 0, 0],
  ['지모신', 89, '여와 A (NG+)', 502, 522, 44, 65, 105, 60, 74, '-', '약', '-', '무' , '반', '-', '무', 0, -6, +2, +3, +7, -3, -3, 0, 0, +3, 0],
  ['타천사', 89, '아브디엘 A (NG+)', 596, 451, 70, 65, 85, 83, 51, '-', '-', '내', '내', '내', '약' , '반', 0, 0, +4, 0, +2, -5, +7, 0, 0, -3, 0],
  ['대천사', 90, '미카엘 (Law)', 552, 474, 76, 65, 78, 76, 59, '-', '무', '무', '-', '약', '무', '-', +2, +5, 0, 0, -4, +3, -5, +4, 0, 0, 0],
  ['마왕', 92, '벨리알 (Cha)', 650, 391, 96, 90, 75, 61, 50, '-', '무', '약', '-', '무', '-', '무', +3, +6, -7, 0, 0, 0, +2, 0, 0, 0, 0],
  ['마신', 93, '바알 (SQ)', 578, 476, 74, 76, 98, 65, 67, '-', '내', '약' , '반', '내', '무', '-', 0, +3, -5, +5, +2, +3, 0, 0, +4, -3, 0],
  ['지모신', 93, '다누 (DN)', 496, 564, 42, 59, 103, 65, 110, '-', '내', '내', '내', '내', '무', '약', -3, 0, +2, 0, 0, +3, -7, +4, 0, +4, +2],
  ['대천사', 95, '메타트론', 626, 443, 82, 79, 95, 72, 76, '-', '내', '내', '내', '내', '무', '-', 0, 0, 0, 0, 0, +5, 0, +6, -4, -4, +2],
  ['마왕', 95, '베엘제붑', 570, 517, 65, 75, 76, 92, 92, '-', '-', '내', '흡', '약', '내', '무', 0, 0, +2, +4, -6, -2, +6, 0, 0, -4, +2],
  ['파괴신', 96, '시바 (SQ)', 670, 440, 101, 79, 88, 74, 73, '내', '흡', '약', '흡', '-', '내', '내', +6, +3, -5, +3, 0, 0, 0, +3, -5, -2, +2],
  ['왕', 99, '인수라 (DLC)', 969, 1014, 99, 99, 99, 99, 99, '무', '무', '무', '무', '무', '무', '무', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  
]

const getData = () => {
  let data = []
  let temp = {}
  devilList.map((devil, i) => {
    titleList.map((title, index) => {
      temp[title] = devil[index]
    })

    data.push(temp)
    temp = {}
  })

  return data
}
