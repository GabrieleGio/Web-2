package com.smi.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import com.smi.entity.Utente;
public class UtenteDaoImpl implements UtenteDao {
	
	//Questa map in futuro andrà cancellata, serve a simulare un database
	HashMap<Integer,Utente> mapUtenti = new HashMap<Integer,Utente>();
	ArrayList<Utente> listaUtenti = new ArrayList<>(mapUtenti.values());

	@Override
	public Utente insert(Utente u) {
		if(mapUtenti.containsKey(u.getIdutente()))
			throw new RuntimeException("utente giÃ presente " + u.getIdutente());

			mapUtenti.put(u.getIdutente(), u);
		return u;
	}

	@Override
	public Utente update(Utente u) {
		//TODO capire come funziona questa
		return u;
	}

	@Override
	public boolean delete(Integer id) {
		Utente utente = mapUtenti.remove(id);
		if(utente!=null)
			return true;
		else
			return false;
	}

	@Override
	public List<Utente> selectAll() {
		return listaUtenti;
	}

	@Override
	public Utente selectById(Integer id) {
		
		return null; //TODO deve ritornare l'utente
	}

}
