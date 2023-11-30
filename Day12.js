function printTimeEverySec(){
    
    setInterval(()=>{
        console.log(getTimeNow());
    }, 1000);

}

function getTimeNow(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return clockStr;
}
printTimeEverySec();