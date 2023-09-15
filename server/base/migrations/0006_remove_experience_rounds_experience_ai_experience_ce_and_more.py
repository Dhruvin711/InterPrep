# Generated by Django 4.2.5 on 2023-09-12 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_experience_rounds_alter_experience_company_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='rounds',
        ),
        migrations.AddField(
            model_name='experience',
            name='ai',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='experience',
            name='ce',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='experience',
            name='che',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='experience',
            name='cse',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='experience',
            name='ece',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='experience',
            name='ee',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='experience',
            name='me',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='experience',
            name='round1_body',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='experience',
            name='round1_title',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='round2_body',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='experience',
            name='round2_title',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='round3_body',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='experience',
            name='round3_title',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='round4_body',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='experience',
            name='round4_title',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='round5_body',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='experience',
            name='round5_title',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='round6_body',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='experience',
            name='round6_title',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]