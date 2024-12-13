type Props = {
  fillPercentage: number;
  width: number;
  height: number;
};
const StarIcon = ({ fillPercentage, width, height }: Props) => {
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.94 47.94"
    >
      <mask id="starMask">
        <path
          d="M23.97,0 32.477,15.848 47.94,18.276 37.088,29.096 39.717,44.706 23.97,38.616 8.223,44.706 10.852,29.096 0,18.276 15.463,15.848z"
          fill="white"
        />
      </mask>
      <path
        d="M23.97,0 32.477,15.848 47.94,18.276 37.088,29.096 39.717,44.706 23.97,38.616 8.223,44.706 10.852,29.096 0,18.276 15.463,15.848z"
        fill="none"
        stroke="#fe5f1e"
        strokeWidth="2"
        mask="url(#starMask)"
      />
      <path
        style={{
          fill: "#fe5f1e",
          clipPath: `inset(0 ${47.94 - 47.94 * fillPercentage}px 0 0)`,
        }}
        d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
          c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
          c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
          c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
          c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
          C22.602,0.567,25.338,0.567,26.285,2.486z"
      />
    </svg>
  );
};
export default StarIcon;
