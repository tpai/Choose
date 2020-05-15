using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Global : MonoBehaviour {
	public static List<Story> stories;
	void Awake () {
		TextAsset str = Resources.Load<TextAsset>("Stories");
		Stories json = JsonUtility.FromJson<Stories>(str.text);
		Global.stories = json.stories;
	}
}
