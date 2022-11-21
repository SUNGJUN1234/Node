// 3등
// 즉시 실행 시 권장하는 함수
setImmediate(()=>{
    console.log('immediate!');
})

// 2등
setTimeout(()=>{
    console.log('timeout');
},0);

// 1등
// 이벤트루프가 다른 함수보다 우선으로 처리하도록 만듦
process.nextTick(()=>{
    console.log('nextTick');
})