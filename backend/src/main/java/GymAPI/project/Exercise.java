package GymAPI.project;

public class Exercise {

    private Integer id;

    private String name;

    private String muscle;

    private String equipment;

    private String link;

    public Exercise(Integer id, String name, String muscle, String equipment, String link){
        this.id = id;
        this.name = name;
        this.muscle = muscle;
        this.equipment = equipment;
        this.link = link;
    }

    public Integer getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public String getMuscle(){
        return muscle;
    }

    public String getEquipment(){
        return equipment;
    }

    public String getLink(){
        return link;
    }


    public void setName(String name){
        this.name = name;
    }

    public void setMuscle(String muscle){
        this.muscle = muscle;
    }

    public void setEquipment(String equipment){
        this.equipment = equipment;
    }

    public void setLink(String link){
        this.link = link;
    }


}
