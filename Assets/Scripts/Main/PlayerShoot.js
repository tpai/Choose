#pragma strict

import SimpleJSON;
import UnityEngine.UI;

var isRead : boolean = false;
var isReading : boolean = false;
var paper : Transform;

var stories : JSONArray;
var json : JSONNode;
var data : TextAsset;
var index : int;

function Start () {
	data = Resources.Load.<TextAsset>("Stories");
	json = JSON.Parse(data.text);
	stories = json["Stories"].AsArray;
	index = PlayerPrefs.GetInt("NowStageIndex");
	Debug.Log(index);
}

function Update () {
	if (Input.GetKeyDown (KeyCode.E)) {

		var hit : RaycastHit;
		
		if(Physics.Raycast(transform.position, transform.forward, hit, 3f)){
			
			var targetTag : String = hit.transform.tag;
			
			if(targetTag == "Paper") {
				isRead = true;
				paper = hit.transform;
				ShowPaperUI(!isReading);
			}
			else if(targetTag == "LDoor" || targetTag == "RDoor" || targetTag == "BDoor") {
				switch(targetTag) {
					case "LDoor":
						PlayerPrefs.SetInt("Door", 1);
						break;
					case "RDoor":
						PlayerPrefs.SetInt("Door", 2);
						break;
					case "BDoor":
						PlayerPrefs.SetInt("Door", Random.Range(1, 2));
						break;
				}
				
				if(index == stories.Count - 2)
					PlayerPrefs.SetInt("ExitDoor", 3);
				
				Debug.Log(targetTag+"/"+stories[index]["Answer"]);
				
				// go to scene
				if(index == stories.Count - 1) {
					if(targetTag == stories[index]["Answer"])
						PlayerPrefs.SetInt("NextLevel", 4);
					else
						PlayerPrefs.SetInt("NextLevel", 3);
				}
				else if(targetTag == stories[index]["Answer"]) {
					Debug.Log("correct");
					// next question
					PlayerPrefs.SetInt("NowStageIndex", PlayerPrefs.GetInt("NowStageIndex")+1);
					PlayerPrefs.SetInt("NextLevel", 1);
				}
				else {
					Debug.Log("wrong");
					PlayerPrefs.SetInt("NextLevel", 3);
				}
				Application.LoadLevel(2);
			}
			else {
				ShowPaperUI(false);
			}
		}
		else {
//			Debug.Log ("No Shoot!");
			ShowPaperUI(false);
		}
	}

	Debug.DrawRay (transform.position, transform.forward * 3, Color.green);
}

function ShowPaperUI (show : boolean) {
	isReading = show;
	if(paper != null) {
		paper.SendMessage("ShowPaperUI", show);
		transform.parent.SendMessage("SetControllable", !show);
	}
}