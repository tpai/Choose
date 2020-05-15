using UnityEngine.UI;
using UnityEngine;
using System.Collections;

[System.Serializable]
public partial class Result : MonoBehaviour
{
    public virtual void Start()
    {
        int i = 0;
        while (i < Global.stories.Count)
        {
            PlayerPrefs.SetString("Result", PlayerPrefs.GetString("Result") + PlayerPrefs.GetString("Q" + i));
            i++;
        }
        ((Text) this.GetComponent(typeof(Text))).text = PlayerPrefs.GetString("Result");
    }

}