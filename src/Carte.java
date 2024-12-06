public class Carte{
    //Attribut d'une carte de mus
    private int valeur; //10 par famille de carte (
    private String famille; //Epées, Pièces ,Bâtons, Coupes


    //Constructeur de la classe Carte
    public Carte(int valeur, String famille){
        this.valeur = valeur;
        this.famille = famille;
    }

    //getters et setters

    public int getValeur(){
        return this.valeur;
    }
    public void setValeur(int valeur){
        this.valeur = valeur;
    }
    public String getFamille(){
        return this.famille;
    }
    public void setFamille(String famille){
        this.famille = famille;
    }


    //Méthode pour afficher une carte
    public String toString(){
        return "Carte : "+this.valeur+" de "+this.famille;
    }
}