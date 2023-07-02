/* sum from 1 to  100*/

const sum = () => {
    const ans = ( 100 * ( 100 + 1 ) ) / 2;
    console.log( ans );
}

const hello = sum();

/* sum from start to end */
const sum2 = (startIndex, endIndex) => {
    let ans2 = 0;
    for ( let i = startIndex; i <= endIndex; i++)
    {
        ans2 += i;
    }
    console.log( `Sum from ${startIndex} to ${endIndex} = ${ ans2 }` );
}

let yolo = sum2( 1, 100 );