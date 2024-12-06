import java.util.ArrayList;
import java.util.List;

public class Joueur {
    private String nom;
    private List<Carte> main;
    private int points;

    public Joueur(String nom) {
        this.nom = nom;
        this.main = new ArrayList<>();
        this.points = 0;
    }

    public void recevoirCarte(Carte carte) {
        main.add(carte);
    }

    public List<Carte> getMain() {
        return main;
    }

    public int getPoints() {
        return points;
    }

    public void ajouterPoints(int points) {
        this.points += points;
    }

    public String getNom() {
        return nom;
    }
}
