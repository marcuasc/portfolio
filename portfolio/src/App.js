import './App.css';
//import ChitChat from "./Components/ChitChat/index"
import Menu from "./Components/Menu/index";
//import Vector from "../Vector.svg";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';



function App() {
  return (
<ParallaxProvider>
 <div className="flex-row bg-middleGrey min-h-screen w-screen block">
   <Menu></Menu>
</div>
<div className="flex-row bg-blueGray h-screen w-screen transform rotate-rq-8 block">
</div>
<div className="flex-row bg-purple-600 h-screen w-screen transform rotate-rq-8 block" >
</div>

<Parallax className=" block absolute top-24 " y={[20, 30]} slowerScrollRate >
<svg width="629" height="630" viewBox="0 0 629 630" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M474.036 169.136C493.729 193.617 503.354 222.894 517.879 250.247C533.233 279.161 560.867 306.254 562.905 336.496C564.954 366.895 542.796 388.165 528.759 411.693C516.361 432.475 503.855 453.449 484.673 467.633C466.467 481.094 444.68 491.083 420.27 491.909C397.009 492.697 370.164 465.267 349.116 472.224C316.16 483.117 310.329 534.685 275.046 539.911C245.936 544.223 210.824 520.488 186.265 496.344C161.627 472.122 153.712 437.252 139.422 406.58C126.696 379.265 105.094 351.613 106.037 324.144C107.023 295.403 131.874 278.668 144.611 255.389C153.958 238.306 165.759 223.218 171.723 204.095C178.877 181.157 171.139 151.449 183.223 131.593C195.577 111.292 215.641 94.5091 240.302 91.4055C265.062 88.2892 291.849 112.207 317.816 114.654C347.359 117.437 372.895 96.3935 402.388 106.679C430.947 116.639 453.94 144.154 474.036 169.136Z" fill="#EF8BFF"/>
</svg>
    </Parallax>

    <Parallax  y={[-10, 10]} x={[10,50]} className=" block absolute top-24 left-80" >
    <svg width="481" height="494" viewBox="0 0 481 494" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M159.479 79.7345C196.464 72.3343 227.468 101.001 263.993 107.658C300.012 114.222 344.356 94.7444 371.063 118.295C397.812 141.884 384.496 185.267 391.429 220.038C399.366 259.842 429.293 297.639 414.581 336.545C399.31 376.929 358.395 407.876 315.77 420.121C275.613 431.657 236.858 409.843 197.499 398.907C162.769 389.258 122.352 387.213 100.046 360.184C78.1789 333.688 90.2629 294.663 83.6605 260.969C76.101 222.392 43.0378 185.985 58.6144 148.751C74.3408 111.159 118.589 87.916 159.479 79.7345Z" fill="#72DDFF"/>
</svg>
    </Parallax>

    <Parallax  y={[-30, 10]} x={[10,100]} className=" block absolute top-2/3 left-2/4 " >
    <svg width="442" height="409" viewBox="0 0 442 409" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M368.49 104.159C391.05 117.238 398.528 146.602 392.346 174.707C386.27 202.334 357.019 226.493 336.015 251.822C317.592 274.038 300.364 296.413 276.489 314.415C251.366 333.359 224.01 350.103 195.003 358.147C164.665 366.559 130.513 373.001 108.823 360.907C87.2827 348.897 93.4631 317.168 83.3905 295.913C74.5969 277.358 48.8899 266.726 53.27 243.684C57.6818 220.475 86.035 201.117 105.304 180.635C120.925 164.031 139.936 151.332 155.691 134.813C179.353 110.005 188.973 66.2618 221.182 59.1425C253.052 52.0979 250.801 99.8856 277.204 107.954C303.712 116.055 345.88 91.0514 368.49 104.159Z" fill="#77FF85"/>
</svg>
    </Parallax>

</ParallaxProvider>

  );
}

export default App;
