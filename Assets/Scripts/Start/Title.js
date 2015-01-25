#pragma strict

import UnityEngine.UI;

function Start () {
	PlayerPrefs.SetInt("Door", 0);
	PlayerPrefs.SetInt("NowStageIndex", 0);
	PlayerPrefs.SetInt("ExitDoor", -1);
}

function GameStart () {
	Application.LoadLevel(1);
}