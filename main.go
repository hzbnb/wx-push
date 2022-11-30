package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Sdata struct {
	Value string `json:"value"`
	Color string `json:"color"`
}

type SendData struct {
	Touser      string           `json:"touser"`
	Template_id string           `json:"template_id"`
	Topcolor    string           `json:"topcolor"`
	Data        map[string]Sdata `json:"data"`
}

type result struct {
	Access_token string `json:"access_token"`
}

func main() {
	token := get_tokne()
	send(token)
	fmt.Println(token)
}
func get_tokne() string {
	resp, err := http.Get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appid + "&secret=" + appsecret)
	if err != nil {
		return ""
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(string(body))
	var res result
	_ = json.Unmarshal(body, &res)
	return string(res.Access_token)
}
func send(token string) {
	client := &http.Client{}
	sendData := init_data()
	bytesData, _ := json.Marshal(sendData)
	req, _ := http.NewRequest("POST", "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token="+token, bytes.NewReader(bytesData))
	resp, _ := client.Do(req)
	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(string(body))
}

func init_data() SendData {
	sdata := make(map[string]Sdata)
	sdata["nowDate"] = Sdata{
		Value: "黄先生",
		Color: "#FF0000",
	}
	sdata["weather"] = Sdata{
		Value: "大雨",
		Color: "#FF0000",
	}
	sendData := SendData{
		Touser:      touser,
		Template_id: template_id,
		Topcolor:    "#FF0000",
		Data:        sdata,
	}
	return sendData
}
