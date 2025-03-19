package com.smi.dto;
//Il dto voglio fare che sia uguale all'entity ma non torni la password
public class UtenteDto {
	private Integer idutente;
	private String nome;
	private String cognome;
	private String nomeUtente;
	private String password;
	
	public UtenteDto(Integer idutente, String nome, String cognome, String nomeUtente, String password) {
		super();
		this.idutente = idutente;
		this.nome = nome;
		this.cognome = cognome;
		this.nomeUtente = nomeUtente;
		this.password = password;
	}

	public UtenteDto(Integer idutente, String nome, String cognome, String nomeUtente) {
		super();
		this.idutente = idutente;
		this.nome = nome;
		this.cognome = cognome;
		this.nomeUtente = nomeUtente;
	}

	public UtenteDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getIdutente() {
		return idutente;
	}

	public void setIdutente(Integer idutente) {
		this.idutente = idutente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getNomeUtente() {
		return nomeUtente;
	}

	public void setNomeUtente(String nomeUtente) {
		this.nomeUtente = nomeUtente;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}

