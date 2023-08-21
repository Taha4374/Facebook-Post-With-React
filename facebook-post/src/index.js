import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Post(props) {
  return <div className="facebookPost">

    <div className="post">


      {/* <Image source={require('./')} /> */}

      <img className="img" src={props.imgUrl}></img>

      <span className="Name">{props.name}</span>
      <span className="upload">{props.upload}</span>
      <p>Here's a cool thing about props: you can pass whatever you want into them. You’re not restricted to strings, or trying to guess what it will do with your string (cough Angular1). Remember earlier, and 30 seconds ago, how we put a JS expression inside single braces? Well, you can do the same thing with a prop’s value:</p>

      <img className="imageUrl" width={350} src={props.imageUrl}></img>
      {/* <video className="video"  src={props.video}> </video> */}
      {/* <br /> */}
      <button className="btn">Like</button>
      <button className="btn">Comment</button>
      <button className="btn">share</button>

    </div>

  </div>
}



ReactDOM.render(<div>
  <Post imgUrl={"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/182550546_145143207630274_7992125519756161743_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHkRRD44MAfmpNj0MT7il959mDKlMgN2A_2YMqUyA3YD0tT1REAI_1rxKcKiY0C52X5rkbyuTUgHQnNPdFVm0ad&_nc_ohc=dhhfnRo0AVYAX8eChjr&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfArqOIu4i0AmSx8ohYtPUaiVkGzqBSCiPPJ09w6L1p5Pg&oe=6506715E"}

    imageUrl={"https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?w=2000"}
    // source src="https://www.youtube.com/watch?v=XLZRhD64IZY" type="MP4"
    upload={"20 August 2023"}
    name={"Taha Tariq"} />





  <Post imgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/348579275_718253880102110_8614873565057913715_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHOwondqK7WIqBeqsbatpA0EyC5G7QTXq8TILkbtBNer1EnKiTALIET6TbJme_-k-0VGII8pfuPrAg1RITudI_J&_nc_ohc=92DnzJYLjcUAX-SaRPG&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAjUc8YvIHC_EOboMaVZeTFgFFaZjh6-gphy51JWfXbow&oe=64E3E48F"}

    imageUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/367984563_972512470684430_327745229118306922_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGG_m7naNFqw1wczkQtfMeNHcqDuq3zd7EdyoO6rfN3sToQP-5_5h6W2e5-o9fqKKuNrzodAo9I-uhhV8kW6qtP&_nc_ohc=eSwT_k-lotYAX8a0LsF&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCQ02_oj8O45EYtzpZv72iXlT1_PucSXCH6LxPwYZar7Q&oe=64E3F50B"} text={"jhsdgfljskdhflksdjhf"}
    upload={"15 Feb 2023"}
    name={"Mohtasham Saqib"} />



  <Post imgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/347411135_3421571964820195_5516263838555093350_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSL0F2gCCdydzQasH47MnlnsoVPTRqFhqeyhU9NGoWGuhBbXwpEkWynGLwq49rijfzNkAwoXXLt-gXC3DKKM-d&_nc_ohc=HuxDQjRWrGQAX9poI2t&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfATPtTmLpAsAbvBGEXTXZs5LrrBZLe6_l6j8vI9RbxG0Q&oe=64E33520"}

    imageUrl={"https://marketplace.canva.com/EAE96cUXRns/1/0/1600w/canva-black-and-red-futuristic-tech-review-youtube-banner-ZIxCpFwKKFw.jpg"} text={"jhsdgfljskdhflksdjhf"}
    upload={"10 Feb 2023"}
    name={"Abdul Hadi"} />


  <Post imgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/135767230_812634322629184_6667057854510093145_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE4tpWqi5DBfwcfBxVQN0vWEoMbiB0SSawSgxuIHRJJrDzADQCsC3mB0OwogUAKgbA7K9Td4q6vpNNdNhjGn4Tr&_nc_ohc=_aPe51NjYYQAX-6R1Zo&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBeQ3SQ77MW02Bg7z5sjBLjXQq5Kf8A029CvI5qFFWvEg&oe=650A881F"}

    imageUrl={"https://play-lh.googleusercontent.com/HL5AcvVnavAL5N5J_GaIjCNasUfbqbuEeK7PAf3XDbpnUMlrALr-GEoDysJdAHS2dK0=w526-h296-rw"} text={"jhsdgfljskdhflksdjhf"} upload={"5 August 2023"}
    name={"Jalil Shafi"} />



  <Post imgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/362636813_1993805614297913_3591515834345811772_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHN_-laP2ZCT0lI7Dn4YAeVi08zd3QUXACLTzN3dBRcAE6seQ53RIPz6HHeoZHjFHLvX27WtUWU3DUPFm-H7dZ6&_nc_ohc=wA7XtvzjLBUAX_L7qRA&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCf2ndao_izcdMBRLLXwBoMj3HDMb65Vo08FHatGFhSDQ&oe=64E7282B"}

    imageUrl={"https://www.supercars.net/blog/wp-content/uploads/2022/11/Praga-Cars-Bohema-5.jpg"} text={"jhsdgfljskdhflksdjhf"} upload={"6June  2023"} name={"Abdul Basit"} />


  <Post imgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/329339392_860335985263063_7789740082265423880_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFQRaaqTUSUfeh3vMr6AKyIsRf2nmqm7rSxF_aeaqbutF70Yfr7pCGGSjM4EmNnpAHFpHsxgrP3oOBt0B_vEFhj&_nc_ohc=-829gZVDfoMAX_UjhNI&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfD0-JiV6BUcDfA1p6aXojLpH__QP_9En453J4WN_DDIDw&oe=64E7A41E"}

    imageUrl={"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"} text={"jhsdgfljskdhflksdjhf"} upload={"10 Feb 2023"} name={"Ãàrîz Khàmîsá"} />


  <Post imgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/71255937_101702034573650_5426251781866782720_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeET-zwBR35lWB4DHQOjVI6gJlH-xfNFSsYmUf7F80VKxqQCDFefsAHGY_6DsQvwnjD6ngm3TXyY8kBSzb5EdOro&_nc_ohc=6-HnuIXV68YAX_6MLxo&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBiQE8sRUW_BGh629yrJGoqpD2Vjnyt6OWomYC7zCuhbA&oe=650A8210"}

    imageUrl={"https://i.tribune.com.pk/media/images/2123189-capture-1577079968/2123189-capture-1577079968.jpg"} text={"jhsdgfljskdhflksdjhf"} upload={"8 Feb 2023"} name={"Hassan Shahid"} />


</div>, document.querySelector("#root"));