const { appid, appsecret, template_id, touser } = require("./config/index");
const axios = require("axios");
const token = "";
const sendData = {
  touser,
  template_id,
  topcolor: "#FF0000",
  data: {
    nowDate: {
      value: "黄先生",
      color: "#173177",
    },
    weather: {
      value: "黄先生",
      color: "#173177",
    },
    city: {
      value: "黄先生",
      color: "#173177",
    },
    low: {
      value: "黄先生",
      color: "#173177",
    },
    high: {
      value: "黄先生",
      color: "#173177",
    },
    loveDate: {
      value: "黄先生",
      color: "#173177",
    },
    txt: {
      value: "黄先生",
      color: "#173177",
    },
  },
};
async function get_token() {
  const {
    data: { access_token },
  } = await axios.get(
    `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`
  );
  return access_token;
}
async function send(token) {
  const res = await axios.post(
    `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${token}`,
    sendData
  );
  console.log(res.data);
}

async function run() {
  let token = await get_token();
  send(token);
}

run();
