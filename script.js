/* script.js */

// 필요한 HTML 요소들을 가져옵니다.
const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');

// 계산기 화면에 표시될 현재 값을 저장할 변수
let currentInput = '0';

// 버튼 영역에서 클릭 이벤트가 발생하면 처리
buttons.addEventListener('click', function(event) {
  // 클릭된 것이 버튼이 아니면 무시
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  // 클릭된 버튼의 텍스트(값)를 가져옵니다.
  const value = event.target.innerText;

  // switch 문을 사용해 값에 따라 다르게 처리
  switch (value) {
    case 'C':
      // C: 초기화
      currentInput = '0';
      break;
    case '=':
      // =: 계산 실행
      try {
        // new Function을 사용해 문자열을 계산합니다. (eval() 대용)
        currentInput = new Function('return 'F + currentInput)();
      } catch {
        // 계산식이 잘못된 경우 (예: 5 + * 3)
        currentInput = 'Error';
      }
      break;
    default:
      // 그 외의 경우 (숫자, 연산자)
      if (currentInput === '0' || currentInput === 'Error') {
        // 현재 0이거나 Error 상태면 새 값으로 덮어쓰기
        currentInput = value;
      } else {
        // 아니면 기존 값 뒤에 이어붙이기
        currentInput += value;
      }
      break;
  }

  // 처리된 결과를 화면(display)에 업데이트
  display.innerText = currentInput;
});