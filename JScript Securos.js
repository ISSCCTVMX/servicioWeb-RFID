function Init()
{
    Core.RegisterEventHandler("HTTP_EVENT_PROXY","1","PENDING_REQUEST","RESPONSE_TO_HTTP");
}

function RESPONSE_TO_HTTP(e)
{
	
	if(e._path == "/rfid")
	{
		var identificador = e._id; 
		var response = "";
		if(e.comentario != null && e.id != null)
		{
			Core.SendEvent("RFID", e.id , "RECEIVED", "Comentario", e.comentario);
	 		response = '{"status":"ok"}';
		}
		else
		{
			response = '{"status":"nok"}';
		}

		Log.Debug("response: " + response);
		Core.DoReact("HTTP_EVENT_PROXY","1","RESPONSE","_id",identificador,"_body",response,"_content_type","application/json");

	}
		
}