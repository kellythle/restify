# Generated by Django 4.1.7 on 2023-03-19 23:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0003_alter_property_amenities'),
    ]

    operations = [
        migrations.AddField(
            model_name='propertyimages',
            name='image_url',
            field=models.CharField(default='/Users/rohitprakash/Desktop/School/Year 4/Semester 2/CSC309/Project 1/group_3461/P2/restify/media/IMG_9322_edit_for_study_areas_page_WallaceRm.jpg', max_length=2000),
            preserve_default=False,
        ),
    ]
