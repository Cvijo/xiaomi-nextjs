import { useRouter } from "next/router";
import Layout from '../../components/Layout';
import { PropTypes } from 'prop-types';
import ProductItem from './../../components/products/ProductItem';

const allProductLinksUrl =
  "https://offers.xiaomipedia.com/api/v1/links?api_key=ali7w4fhopq34ifn93784fg";





const ProductDetail = ({links}) => {
  const router = useRouter();
  return (
    <Layout>
        {links && links.map(link => {
            return(
                <ProductItem key={link.idLink} link={link}/>
            );
        })}
    </Layout>
  );
};

ProductDetail.getInitialProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`${allProductLinksUrl}&product_id=${id}`);
    const data = await res.json();
    console.log("fetched links data count: " + data.length);
    return {
      links: data
    };
  };

ProductDetail.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
}
  
export default ProductDetail;
