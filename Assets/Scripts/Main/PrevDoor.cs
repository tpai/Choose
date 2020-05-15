using UnityEngine;
using System.Collections;

[System.Serializable]
public partial class PrevDoor : MonoBehaviour
{
    public int doorId;
    public GameObject[] door;
    public virtual void Start()
    {
        if (PlayerPrefs.GetInt("ExitDoor") != -1)
        {
            this.doorId = PlayerPrefs.GetInt("ExitDoor");
        }
        else
        {
            this.doorId = PlayerPrefs.GetInt("Door");
        }
        if (this.doorId != 0)
        {
            GameObject obj = UnityEngine.Object.Instantiate(this.door[this.doorId - 1]);
            obj.transform.parent = this.transform;
            obj.transform.localPosition = Vector3.zero;
            obj.transform.localRotation = Quaternion.identity;
        }
    }

}