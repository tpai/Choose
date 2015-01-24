#pragma strict

import SimpleJSON;
import UnityEngine.UI;

function Start () {
	var data : TextAsset = Resources.Load.<TextAsset>("Stories");
	var json : JSONNode = JSON.Parse(data.text);
	var stories : JSONArray = json["Stories"].AsArray;
	
	var index : int = PlayerPrefs.GetInt("NowStageIndex");
	GetComponent(Text).text = stories[index]["Content"];
}