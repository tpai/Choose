using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections;

[System.Serializable]
public partial class Title : MonoBehaviour
{
    public virtual void Start()
    {
        PlayerPrefs.SetInt("Door", 0);
        PlayerPrefs.SetInt("NowStageIndex", 0);
        PlayerPrefs.SetInt("ExitDoor", -1);
    }

    public virtual void GameStart()
    {
		SceneManager.LoadScene (1);
    }

}