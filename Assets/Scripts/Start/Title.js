#pragma strict

import UnityEngine.UI;

function Start () {
	yield WaitForSeconds(3);
	GetComponent(Button).enabled = true;
	PlayerPrefs.SetInt("NowStageIndex", 0);
	PlayerPrefs.SetInt("Door", 0);
}

function GameStart () {
	Application.LoadLevel(1);
}