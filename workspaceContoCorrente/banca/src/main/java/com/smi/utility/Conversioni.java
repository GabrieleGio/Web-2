package com.smi.utility;

import com.smi.dto.UtenteDto;
import com.smi.entity.Utente;

public class Conversioni {
	public static Utente Dto_Entity(UtenteDto dto) {
		return new Utente(dto.getIdutente(), dto.getNome(),
				dto.getCognome(),dto.getNomeUtente(),dto.getPassword());
	}
	
	public static UtenteDto Entity_Dto(Utente entity) {
		return new UtenteDto(entity.getIdutente(),entity.getNome(),entity.getCognome(),entity.getNomeUtente(),entity.getPassword());
	}
}
