using UnityEngine.UI;
using UnityEngine;
using System.Collections;

[System.Serializable]
public partial class PaperUIText : MonoBehaviour
{
    public virtual void Start()
    {
        int index = PlayerPrefs.GetInt("NowStageIndex");
		GetComponent<Text>().text = Global.stories[index].content;
    }

}