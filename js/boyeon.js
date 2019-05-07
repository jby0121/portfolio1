window.onload = function(){

//intro typing animation
    const who = document.querySelector(".who");
    who.addEventListener('transitionend', typeWriter);
    let i = 0;
    const txt = '의미있는 언어, 생각하는 손가락';

    function typeWriter() {
        if (i < txt.length) {
            who.querySelector("p").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }

//scroll animation
    const sections = document.querySelectorAll('section');
    const htmlElem = document.querySelector("html");
    
    document.addEventListener("scroll", scrollWork);

    //html data속성으로 각 sections의 절대 위치를 넣기
    sections.forEach(function (element) {
        element.dataset.absoluteY = getAbsoluteTop(element);
        function getAbsoluteTop(element) {
            return Math.floor(window.pageYOffset + element.getBoundingClientRect().top);
            //소수점 털어냈음
        }
    });

    function scrollWork (e) {
        let scrollY = htmlElem.scrollTop;
            // 각 section의 절대값 위치와 현재 스크롤 위치를 비교
            sections.forEach(function (element) {
            if (element.dataset.absoluteY <= scrollY + 100) {
                element.classList.add('active');
                element.style.willChange = 'transform, opacity';
                scaleUp (element);
            } else {
                element.classList.remove('active');
                element.style.willChange = 'auto';
                //scaleDown (element); 
            }
        });
                
    }


    //portfolio의 흰색 테두리 크기를 줄이기
    function scaleUp (target) {
        //const border = target.querySelectorAll(".border");    
        const borders = target.querySelectorAll(".border > div");    
        //console.log(border);
        //let cnt = border.dataset.borderCount;
        //border.dataset.borderCount = cnt-1;
        function incScale(line){
          line.style.transform = 'scale(0,1)';
        }
        
        function decScale(line){
          line.style.transform = 'scale(1,0)';
        }
        
        function incScaleOthers(line, cnt){
          line.parentNode.dataset.borderCount = cnt-1; //x가 두개여서 두번 실행됨 그래서 0까지 못가고 0.2에서 멈추는듯.
          line.style.transform = 'scale(' + (cnt/100) + ',1)';
        }
        
        function decScaleOthers(line, cnt){
          line.style.transform = 'scale(1,' + (cnt/100) + ')';
        }
        
        borders.forEach(function(line){
          let cnt = line.parentNode.dataset.borderCount;
          if (cnt/100 < 0.02) {
            line.dataset.scale == 'x' ? incScale(line) : decScale(line);
            return;
          }
          line.dataset.scale == 'x' ? incScaleOthers(line, cnt) : decScaleOthers(line, cnt);
        });
      }


    
    // //portfolio의 흰색 테두리 크기를 줄이기
    // function scaleUp (target) {
    //     //const border = target.querySelectorAll(".border");    
    //     const borders = target.querySelectorAll(".border > div");    
    //     //console.log(border);
    //     //let cnt = border.dataset.borderCount;
    //     //border.dataset.borderCount = cnt-1;
    //     borders.forEach(function(line){
    //         let cnt = line.parentNode.dataset.borderCount;
    //         if (cnt/100 < 0.02) {
    //             if (line.dataset.scale == 'x') {
    //                 line.style.transform = 'scale(0,1)';
    //             } 
    //             if (line.dataset.scale === 'y') {
    //                 line.style.transform = 'scale(1,0)';
    //             } 
    //             return;
    //         }
    //         if (line.dataset.scale == 'x') {
    //             line.parentNode.dataset.borderCount = cnt-1; //x가 두개여서 두번 실행됨 그래서 0까지 못가고 0.2에서 멈추는듯.
    //             line.style.transform = 'scale(' + (cnt/100) + ',1)';
    //         } 
    //         if (line.dataset.scale === 'y') {
    //             line.style.transform = 'scale(1,' + (cnt/100) + ')';
    //         } 
    //     });
    // }

    //portfolio의 흰색 테두리 크기를 늘이기
    // function scaleDown (target) {
    //     var borders = target.querySelectorAll(".border > div");
    //     borders.forEach(function(line){
    //         let cnt = line.parentNode.dataset.borderCount;
    //         line.parentNode.dataset.borderCount = cnt+1;
    //         // if (cnt < 90 && line.dataset.scale == 'x') {
    //         //     line.style.transform = 'scale(' + (cnt/100) + ',1)';
    //         // } 
    //         // if (cnt < 90 && border.dataset.scale === 'y') {
    //         //     line.style.transform = 'scale(1,' + (cnt/100) + ')';
    //         //     line.parentNode.dataset.borderCount = cnt+1;
    //         // } 
    //     });
    // }

}
