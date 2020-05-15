using System;
using System.Collections.Generic;

[Serializable]
public class Stories : List<Story> {
	public List<Story> stories;
}

[Serializable]
public class Story {
	public string content;
	public string answer;
}