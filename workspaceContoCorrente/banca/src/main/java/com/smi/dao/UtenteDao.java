package com.smi.dao;

import java.util.List;

import com.smi.entity.Utente;

public interface UtenteDao {
	public Utente insert(Utente u);
	public Utente update(Utente u);
	public boolean delete(Integer id);
	public List<Utente> selectAll();
	public Utente selectById(Integer id);
}
