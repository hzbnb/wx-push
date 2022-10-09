const { appid, appsecret, template_id, touser } = require("./config/index");
const axios = require("axios");
let token =
  "61_SL296k8YSRmKaJRmc9E6Q4jyjK0xVokAiKadZXH4wGLFEGl8hOm1iB3SqV1_HqUaAMh2KjKKB_71rsZhuYuuISa2HcJb0d1Cp-gY3yptlWauhT5EZaMiO5HIjDqFGVafBKm6Mgx-aHpNlHcbOBRiAAADQG";

function get_token() {
  axios
    .get(
      `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`
    )
    .then((res) => {
      console.log(res.data);
      token = res.data.access_token;
      send();
    });
}

function send() {
  axios
    .post(
      `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${token}`,
      {
        touser,
        template_id,
        topcolor: "#FF0000",
        data: {
          ce: {
            value: "黄先生",
            color: "#173177",
          },
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function git_ip() {
  axios.get(`http://mip.chinaz.com/`).then((res) => {
    console.log(res.data);
  });
}

// get_token();

git_ip();
