while True:
    if input.light_level() >40:
        light.set_all(light.rgb(255,0,0))
    else:    
        light.clear()