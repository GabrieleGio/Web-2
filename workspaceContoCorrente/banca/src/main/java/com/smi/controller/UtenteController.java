package com.smi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import com.smi.dto.UtenteDto;
import com.smi.entity.Utente;
import com.smi.service.UtenteService;

@RestController
public class UtenteController {
	//RestController : trasforma una classe java in un controller web
	//il Controller lavora SOLO con i DTO
	
	@Autowired
	UtenteService service;
	
	public UtenteDto insertController(UtenteDto u) {
		UtenteDto utenteInserito = service.insertService(u);
		return utenteInserito;
	}

}
