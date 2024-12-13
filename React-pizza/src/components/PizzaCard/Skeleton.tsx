import ContentLoader from "react-content-loader";

const Skeleton = (props:Record<string, unknown>) => (
  <ContentLoader 
  speed={2}
  width={280}
  height={465}
  viewBox="0 0 280 465"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  {...props}
>
  <rect x="-1" y="273" rx="13" ry="13" width="275" height="25" /> 
  <circle cx="132" cy="137" r="116" /> 
  <rect x="4" y="324" rx="13" ry="13" width="270" height="77" /> 
  <rect x="9" y="426" rx="10" ry="10" width="99" height="30" /> 
  <rect x="123" y="418" rx="17" ry="17" width="149" height="44" />
</ContentLoader>
);

export default Skeleton;
