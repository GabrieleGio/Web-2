package com.smi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.smi.utility.*;
import com.smi.dao.UtenteDao;
import com.smi.dto.UtenteDto;
import com.smi.entity.Utente;

@Service
public class UtenteService {
	//avrà le stesse funzioni del dao di solito
	//le service devono tornare SEMPRE dei DTO
	
	@Autowired
	UtenteDao utenteDao;
	
	
	public UtenteDto insertService(UtenteDto dto) {
		//todo: trasformazione da dto a entity
		Utente entity = Conversioni.Dto_Entity(dto);
		utenteDao.insert(entity);
		//todo: trasformazione da entity a dto
		UtenteDto utenteInserito = dto;
		return utenteInserito;
	}
}
