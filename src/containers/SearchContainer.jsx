import React, {useState, useEffect} from "react";

import SearchList from "../views/searchList";
import CompareStore from "../views/Compare";

import {useLocation, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {searchAPI, putWishListAPI, deleteWishListAPI} from '../lib/api/list';

const raw = `[
  {
      "index": 19,
      "product_name": "NEW 아이패드 프로 4세대 11형 WIFI 256GB",
      "product_price": "1,142,800",
      "product_image": "https://shopping-phinf.pstatic.net/main_2085816/20858164664.jpg?type=f140",
      "product_site_name": "인터파크 쎈딜",
      "product_site_link": "https://cr.shopping.naver.com/adcr.nhn?x=CiZumFeb4mYS2Iff4TTRbv%2F%2F%2Fw%3D%3DsIbLLRmJWXbfjlo5Gm4OXkpX1elOXwQPLalOgX%2FDy0QVVSA4PfNsuvEX%2Bqp1e0huEb5bO9fkQINrcx09hgcIyQQ86PwUztZSbj39ZUArf4IciGOQSJZRPusPnWdygJrbH4vIb17i%2BEL31N4ARXBAXdO0JZ4vKXq2xVuFay0gNbwiO%2FsdgQE5FIA0Tw1QMogpFlkyNAstTg1lKbTscjrA0SYaTxQP9uolvZeLzvVh5mrXrT1jL%2FFiFhKcfusm5t5JgM8OkYitpuK2na6nToNpF%2BLngnxQ7ssMZd09T0OjyjIxearTBvydD1LUI3JWpCADIriSAHgn8Is0LsLbJMJwYbw7V9insHYBd8hFTcEBQc4bcu3o3HKh27VjUb69KX0I23iYorChsxuxv5qKmaPQ8BUUGl2B6vU7pTWwHdxhYJQ4a%2B2P%2B9JvYAgaHzWyzyP9rZF1xnWgkgOn1YONCT2mI1vym9Az7IzGHkfQJuCwFfjoqUz7kq7EfZMAghqJUfBJo%2B5RgOybqIZVeSQYp8h5l8taTeJ0hDv0uoUiozXUuBEGtSPCSiDoTOCvlnBXsIFd4bkdFmWUKAhzqHMZ0ZqQcI1dznR4EhPC6BI08fc6TT2xWkbDrUFJ2hBG8QaB8WVzn&nvMid=22584297906&catId=50000152"
  },
  {
      "index": 27,
      "product_name": "애플 아이패드 7세대 32GB 10.2 인치 wifi 전용 2019 관부가세포함",
      "product_price": "299,000원",
      "product_image": "https://shopping-phinf.pstatic.net/main_2230052/22300526833.jpg?type=f140",
      "product_site_name": "다루 스마트직구",
      "product_site_link": "https://cr.shopping.naver.com/adcr.nhn?x=kteJyZmIkwPBpw2v2jbLNf%2F%2F%2Fw%3D%3DsLCInsd5BbcxSBG2%2BuCQhzNwD4UgxRSK37ceKG33T6vg%2BOfKYJdVgfWNA6Z7HnieOb7olNAU0qFZUdWLiQGmzg3os3XKtxCBr7I5Jfg7O8KX%2BHpbsLkOsT1MFV0RXosizQFctPg%2FknYXxMHtpD6Q4CIZYgwI2fs40XR%2FERq%2FGNyfWK4fiV391hyKbNzjTTmNI1qgpxxbokTHxXmuivt%2Fdup0KU00sfVPduGrpKCqiG6Ki4%2Fr0lz1oSk9AW8qzFsUvpOr9sPYwajBkeE07IGGkJ5SCPsmGKllbt0kl8XIxCXQhl1lqq%2FrzrG94Jp50GtSZ1qPsjrb6CLfTCM%2BsHdPRQS5EutH%2FOc%2FEqkCThODViw3jJLmwdQLT8YIUkpe009uySGvyA3Mo4deUUDeSDOc2k3faantq0iOCQwdvQpPjyf0rtMHQ%2FjU0ywDzroYp7a1aTn8B5g9KXRSclio1%2F%2BbROgG73TTgoEfVi%2F4FRDOeRfXoqTr57355z0Ti2sTrnFeYChNEdLjBUIVGYrw%2BMIGKrkAP5hcAmxP1rEH8URMKSoe5PcsdixOKM84nfw%2BU7IK6%2F%2BLZBVdDPrnDo3aeKGBJpfWtd%2BVIwtnRonZ6P%2BEm0dCWuWZ8X42hmwbvBXOnwpoKaGimR4pR27mrh1IoDTOSgA%3D%3D&nvMid=82290680712&catId=50000152"
  },
  {
      "index": 17,
      "product_name": " Apple 아이패드 7세대 WI-FI 32GB (애플케어플러스 선택)",
      "product_price": "399,000",
      "product_image": "https://shopping-phinf.pstatic.net/main_2228017/22280170171.jpg?type=f140",
      "product_site_name": "11번가 쇼킹딜",
      "product_site_link": "https://cr.shopping.naver.com/adcr.nhn?x=xqV89ZdZWHTlXIswTKLovP%2F%2F%2Fw%3D%3DsUZS7I2OkElAeEpqLhmc10Fhxvs%2Bn9LHAvoQ%2FlGFGFJ4%2BOfKYJdVgfWNA6Z7HnieO2J4F2P33R%2FqBcLkee64dfT5PEjxzBTNyvSsI4M8wVUb%2BHpbsLkOsT1MFV0RXosizHbw%2BQZV1KUOba4xphK0vYC%2BYxcAxQnoCnUx3jjIiOILcAdZDhcUNQhYf4Z7nu%2FXG16jkJuvIqZkI8jPbs1Xkq9eE9U%2BsT2PMsesc9SI%2BthrlRCxXLTUcWFi6fuJRAploFVA9h9lp25DvDIAsf4pL860QsEBUW2POk4ExJZYuF7KAbCY81f975eS5nfR25FBiP83WAv8GAIoQ0MwLPWeb%2FfVnroVhGqmed69kN%2FeEHGv8J4D7afz5%2Fq%2F9MugKNMWLX1w1fMx2fHFo83MqTRHg4HfbTMnBAiTIPUWEjAkdco8F432Q3LtoOenelr8DEv2YhXL%2BDk1XU592bfHpVzQ8CkH%2FGRnr%2BktMWSWV1DDXHUXK0nAf9cenS8Pc%2BY1u951KttTO574JTkeoaStkai%2Fa5T0%2FaDNEtvwbXLOAlKDZp678McXG51UNX2%2BJTlxM1t4WNRERgISSMi0JKv6xpjBYeMvTtug4vCjEvohqOyQz59nJEuxxuOApv5atL3BRlB0NmpFgmrvi1%2B9zfQljqc8AKwau4fTwOUqyF63FjwpQRls%3D&nvMid=23450061680&catId=50000152"
  }
]`

const SearchContainer = () => {
  const location = useLocation();
  const history = useHistory();

  const [list, setList] = useState([]);
  const [detail, setDetail] = useState(null);

  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));

  const handleDetail = (data) => {
    setDetail(data);
  }

  const handleWish = (like, data) => {
    if(!auth) {
      alert("로그인 후 이용이 가능합니다.");
      return;
    }

    const index = list.findIndex(item => item.product_site_link === data.product_site_link);
    const selected = list[index];
    const nextList = [...list];

    if(!like) {
      putWishListAPI(selected, auth).then(res => {
        if(res.status === 200) {
          nextList[index] = {
            ...selected,
            like: true
          }
          setList([...nextList]);
        }
      }).catch(err => {
        alert("찜 등록 애러발생");
      })
    }
    
    else {
      deleteWishListAPI(selected, auth).then(res => {
        if(res.status === 200) {
          nextList[index] = {
            ...selected,
            like: false
          }
          setList([...nextList]);
        }
      }).catch(err => {
        alert("찜 제거 애러발생");
      });
    }
  }

  useEffect(() => {
    if(location.search === "") history.push('/');
    else { 
      // searchAPI(location.search).then(res => {
      //   console.log(res.data);
      //   setList(res.data);
      // });
      console.log(JSON.parse(raw));
      setList(
        JSON.parse(raw)
      )
    }
  }, [location.search, history]);

  return (
    <>
    {detail && <CompareStore {...detail} />}
      
      <SearchList handleWish={handleWish} handleDetail={handleDetail} list={list}/>
    </>
  )
}

export default SearchContainer;




