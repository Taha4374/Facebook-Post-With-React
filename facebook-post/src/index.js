import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Post(props) {
  return <div className="facebookPost">

    <div className="post">


      {/* <Image source={require('./')} /> */}

      <img className="img" src={props.imgUrl}></img>

      <span className="Name">{props.name}</span>
      <span className="upload" >3 July 2023</span>
      <p>Here's a cool thing about props: you can pass whatever you want into them. You’re not restricted to strings, or trying to guess what it will do with your string (cough Angular1). Remember earlier, and 30 seconds ago, how we put a JS expression inside single braces? Well, you can do the same thing with a prop’s value:</p>

      <img  className="imageUrl"    width={350} src={props.imageUrl}></img>
      {/* <br /> */}
      <button className="btn">Like</button>
      <button className="btn">Comment</button>
      <button className="btn">share</button>

    </div>

  </div>
}



ReactDOM.render(<div>
  <Post imgUrl={"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/182550546_145143207630274_7992125519756161743_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHkRRD44MAfmpNj0MT7il959mDKlMgN2A_2YMqUyA3YD0tT1REAI_1rxKcKiY0C52X5rkbyuTUgHQnNPdFVm0ad&_nc_ohc=dhhfnRo0AVYAX8eChjr&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfArqOIu4i0AmSx8ohYtPUaiVkGzqBSCiPPJ09w6L1p5Pg&oe=6506715E"}

    imageUrl={"https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?w=2000"} text={"jhsdgfljskdhflksdjhf"} name={"Taha Tariq"} />





  <Post imgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/348579275_718253880102110_8614873565057913715_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHOwondqK7WIqBeqsbatpA0EyC5G7QTXq8TILkbtBNer1EnKiTALIET6TbJme_-k-0VGII8pfuPrAg1RITudI_J&_nc_ohc=92DnzJYLjcUAX-SaRPG&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAjUc8YvIHC_EOboMaVZeTFgFFaZjh6-gphy51JWfXbow&oe=64E3E48F"}

    imageUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/367984563_972512470684430_327745229118306922_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGG_m7naNFqw1wczkQtfMeNHcqDuq3zd7EdyoO6rfN3sToQP-5_5h6W2e5-o9fqKKuNrzodAo9I-uhhV8kW6qtP&_nc_ohc=eSwT_k-lotYAX8a0LsF&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCQ02_oj8O45EYtzpZv72iXlT1_PucSXCH6LxPwYZar7Q&oe=64E3F50B"} text={"jhsdgfljskdhflksdjhf"} name={"Mohtasham Saqib"} />



  {/* <Post imgUrl={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/347411135_3421571964820195_5516263838555093350_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSL0F2gCCdydzQasH47MnlnsoVPTRqFhqeyhU9NGoWGuhBbXwpEkWynGLwq49rijfzNkAwoXXLt-gXC3DKKM-d&_nc_ohc=HuxDQjRWrGQAX9poI2t&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfATPtTmLpAsAbvBGEXTXZs5LrrBZLe6_l6j8vI9RbxG0Q&oe=64E33520"}

    imageUrl={"https://marketplace.canva.com/EAE96cUXRns/1/0/1600w/canva-black-and-red-futuristic-tech-review-youtube-banner-ZIxCpFwKKFw.jpg"} text={"jhsdgfljskdhflksdjhf"} name={"Abdul Hadi"} /> */}



</div>, document.querySelector("#root"));