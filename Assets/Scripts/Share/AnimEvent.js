#pragma strict

function LoadLevel () {
	Application.LoadLevel(PlayerPrefs.GetInt("NextLevel"));
}