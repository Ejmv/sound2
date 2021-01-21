while (true) {
    if (input.lightLevel() > 40) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
    }
    
}
