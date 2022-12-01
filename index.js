const { appid, appsecret, template_id, touser, city, key, first_date } = require("./config/index");
const axios = require("axios");
const sendData = {
  touser,
  template_id,
  data: {},
};

async function run() {
  let token = await get_token();
  await update();
  send(token);
}

run();

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
async function update() {
  const {
    data: { forecasts },
  } = await axios.get(
    `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=${key}&extensions=all`
  );
  const {
    data: { content },
  } = await axios({
    method: "get",
    url: "https://api.uomg.com/api/rand.qinghua",
  });

  let lovedate = parseInt((new Date().getTime() - new Date(first_date).getTime()) / 1000 / 60 / 60 / 24);
  sendData.data = {
    nowDate: {
      value: forecasts[0].casts[0].date + " 星期" + format(forecasts[0].casts[0].week),
      color: "#54D7FF",
    },
    city: {
      value: forecasts[0].province + " " + forecasts[0].city,
      color: "#FDF7C4",
    },
    weather: {
      value: forecasts[0].casts[0].dayweather,
      color: "#E5D225",
    },
    daytemp: {
      value: forecasts[0].casts[0].daytemp + "°C",
      color: "#2DEDD8",
    },
    nighttemp: {
      value: forecasts[0].casts[0].nighttemp + "°C",
      color: "#6E64BB",
    },
    loveDate: {
      value: lovedate,
      color: "#E75875",
    },
    text: {
      value: content,
      color: "#E07A70",
    },
  };
}

function format(e) {
  switch (e) {
    case "1":
      return "一";
    case "2":
      return "二";
    case "3":
      return "三";
    case "4":
      return "四";
    case "5":
      return "五";
    case "6":
      return "六";
    case "0" || "7":
      return "日";
  }
}
