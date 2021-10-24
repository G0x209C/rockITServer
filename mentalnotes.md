# Mental notes on model client - server connection

Host -> start lobby:generate code + open room for socket.io

Players -> Connect to room:connect to chat + connect to Host-instance

Host = Player with added Authority (chooses game, end of game, etc)
Players = People joining the lobby (joins in games, can disconnect in between)

Host = player, but player != host


# Mental roadblocks;
	
	- How do we go from Host to session to player to session?
		- I suspect this will be problematic, might have to redesign system to be simpler
	- SIMPLIFY: look for simplest solution
		- Do what is necessary: create chat/lobby functionality first

	- USE SOCKET.ID from HOST as ROOM number?
		- Can't be used: SOCKET ID CHANGES ON RECONNECT
