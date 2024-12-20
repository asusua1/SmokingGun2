let scrollSpeed = 1500; // 스크롤 속도 (1초에 한 번씩 스크롤 이동)
let isScrolling = false; // 중복 스크롤 방지 변수

// 스크롤 이벤트 리스너 추가
window.addEventListener('wheel', (event) => {
    if (isScrolling) return; // 중복 스크롤 방지

    isScrolling = true; // 스크롤 시작

    // 마우스 휠이 아래로 스크롤될 때 (다음 섹션)
    if (event.deltaY > 0) {
        currentSection = Math.min(currentSection + 1, totalSections - 1);
    } else {
        // 마우스 휠이 위로 스크롤될 때 (이전 섹션)
        currentSection = Math.max(currentSection - 1, 0);
    }

    // 부드럽게 스크롤하기 위해 setTimeout을 사용해 속도 조절
    setTimeout(() => {
        sections[currentSection].scrollIntoView({
            behavior: 'smooth',  // 부드럽게 스크롤
            block: 'start',
            inline: 'nearest'
        });

        // 스크롤 중복 방지 시간 (속도에 맞춰 적절하게 설정)
        setTimeout(() => {
            isScrolling = false;
        }, scrollSpeed); // 설정된 속도만큼 기다림
    }, 100); // 대기 시간
});

/*----------------------------------------------------*/

// 모든 네비게이션 링크 항목을 선택
const navLinks = document.querySelectorAll('.nav .nav-links');

// 각 네비게이션 링크 항목에 클릭 이벤트 리스너 추가
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // 모든 네비게이션 링크에서 'active' 클래스 제거
        navLinks.forEach(navLink => navLink.classList.remove('active'));

        // 클릭된 네비게이션 링크에만 'active' 클래스 추가
        link.classList.add('active');
    });
});
/* -----------텍스트 하이라이트 ---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.highlight');

    highlights.forEach((element) => {
        // 호버 시 'hovered' 클래스 추가
        element.addEventListener('mouseenter', () => {
            element.classList.add('hovered');
        });

        // 호버 해제 시 효과 유지
        element.addEventListener('mouseleave', () => {
            // 클래스 유지 (아무것도 하지 않음)
        });

        // 클릭 시 원래 상태로 돌아가기
        element.addEventListener('click', () => {
            element.classList.add('reset'); // 원래 상태로 전환

            // reset 클래스를 제거하고 hovered 클래스도 없애기
            setTimeout(() => {
                element.classList.remove('hovered', 'reset');
            }, 300); // CSS transition 시간에 맞게 설정
        });
    });
});
/*-----------------------------------이미지 링크-----------------------------------------------------------------------------------*/
document.getElementById('nowon1-4').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=OO97NaRibN0', '_blank');
});